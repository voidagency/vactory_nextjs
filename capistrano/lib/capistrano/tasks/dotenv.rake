def remote_file_exists?(full_path)
    'true' ==  capture("if [ -e #{full_path} ]; then echo 'true'; fi").strip
end

namespace :dotenv do

    desc 'read env variables'
    task :read do
      env_file = fetch(:env_file, '.env')
      dotenv_contents = ''

      on roles(:app) do
        fail "You must have a #{env_file} file on your server " \
           'to be able to deploy it' unless remote_file_exists?(env_file)

        within release_path do
          dotenv_contents = capture "cat #{env_file}"
        end
      end

      set :env_vars, dotenv_contents.split("\n").map { |var| var.split('=')[0] }
      set :dotenv_contents, dotenv_contents
    end

    task :setup do
        dotenv_contents = fetch(:dotenv_contents)

        on roles(fetch(:dotenv_roles, :all)) do
            print dotenv_contents
            set :default_environment, Dotenv::Parser.call(dotenv_contents)
        end
    end

end