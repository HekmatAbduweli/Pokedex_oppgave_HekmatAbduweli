export const teamsData= {
  name: 'teams',
  title: 'Teams',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'pokemons',
      title: 'Pokemons',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
