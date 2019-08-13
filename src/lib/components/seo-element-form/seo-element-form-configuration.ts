export class SeoElementFormConfiguration {
  public static structure = [
    {
      name: 'title',
      label: 'Title',
      placeholder: null,
      type: 'input-text',
      default_value: null,
      col: 'col-12 col-md-12',
      style: 'container__input',
      rules: [
        'required'
      ],
      label_classes: null,
      input_classes: null,
      config: {
        hasLabel: true,
        hasInput: true,
        hasHelp: false,
      }
    },
    {
      name: 'description',
      label: 'Description',
      placeholder: null,
      type: 'textarea',
      default_value: null,
      col: 'col-12 col-12',
      style: 'container__input',
      rules: [
        'required'
      ],
      label_classes: null,
      input_classes: null,
      config: {
        hasLabel: true,
        hasInput: true,
        hasHelp: false,
      }
    }
  ];
}
