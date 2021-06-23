export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60d39392f367050bf4a03afe',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-mozftt6a',
                  apiId: '21a14607-c30e-438d-bdf1-06d8429a6739'
                },
                {
                  buildHookId: '60d39392c85db71278b372de',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-p5s7pd91',
                  apiId: '53e79a54-f6dc-42c8-a5c6-edc05f03f718'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/steve904/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-p5s7pd91.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
