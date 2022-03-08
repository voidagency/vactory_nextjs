import { Button } from "@vactory/ui/button"

function Override() {
  return (
    <div className="max-w-screen-md px-6 mx-auto">
      <main className="container py-10 mx-auto">
        <h1>Example override button from vactory/ui</h1>
        <Button variant="primary" className="mt-5">
          Primary
        </Button>
        <Button variant="secondary" className="ml-3 mt-5">
          Secondary
        </Button>
      </main>
    </div>
  )
}

export default Override
