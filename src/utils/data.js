import Page from '../components/Page'

export let customData = [
    {
      component: Page,
      link: { path: '/margin', text: 'margin %' },
      selectedSheet: 0,
      sheets: [
        {
          name: 'firstSheet1',
          subpath: 'subpath1',
          rows: [
            {
              height: 600,
              charts: [
                {
                  objectId: 'MEAjCJ',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      component: Page,
      link: { path: '/sales', text: 'sales' },
      selectedSheet: 0,
      sheets: [
        {
          name: 'firstSheet2',
          subpath: 'subpath2',
          rows: [
            {
              height: 600,
              charts: [
                {
                  objectId:  'fNGRa',
                },
              ],
            },
          ],
        },
      ],
    },
]
  