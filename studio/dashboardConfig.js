export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd3337db015134a98a8c531',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-992s7r6a',
                  apiId: '1d9aee32-466f-4590-bf0f-203fed20fd79'
                },
                {
                  buildHookId: '5cd3337d3068b2a00226fcf8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qobyy5e7',
                  apiId: 'e273e599-60dd-4e05-841c-332f851f6e9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jorngeorg/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qobyy5e7.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
