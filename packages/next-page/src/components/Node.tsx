import React from "react"

/*
  @NodeTemplatePackage('@vactory/next-page')
  @NodeTemplateFor('node--vactory_page')
  @NodeTemplateUniqueName('VactoryNodePage')
*/
export const VactoryNodePage = ({ node, params }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Vactory Page
          </h2>
          <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {node.title}
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Use Header menu to switch navigate between pages.
          </p>
          {params && (
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              {JSON.stringify(params)}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
