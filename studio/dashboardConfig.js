export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5db96f320905e314b000b6aa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7khthaoe',
                  apiId: '0056c88d-2dd2-40a0-bbdf-14f76178174e'
                },
                {
                  buildHookId: '5db96f32b8c776826344c18b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-myyyrf8w',
                  apiId: '9825acc2-7d94-405d-8ef8-8b41c962c1db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bodhicougar/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-myyyrf8w.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
