class DateTime {
  constructor(element) {
    this.element = element;
    this.attributes = { ...this.extractDataAttributes() }
  }

  static defaults() {
    return {
      options: {},
      type: '',
      locale: 'ru'
    }
  }

  setTextDate() {
    const date = this.getDate();
    const { options, type, locale } = this.attributes;

    this.element.textContent = date[`toLocale${type}String`](
        locale,
        options
    );
  }

  getDate() {
    const date = new Date();
    const difference = this.attributes.difference;
    // Set date days later or earlier than now.
    date.setDate(
        date.getDate() + difference
    );

    return date;
  }

  getOptions() {
    const dataOptions = this.element.getAttribute('data-options');
    if (!dataOptions) {
      return DateTime.defaults().options;
    }
    // Separate options with ','
    const optionsArray = dataOptions.split(',');
    const options = {};
    // Separate keys with ':'
    optionsArray.forEach((el) => {
      const option = el.split(':');
      const key = option[0];
      // Default is 'numeric'.
      const value = option[1] || 'numeric';

      options[key] = value;
    })

    return options;
  }

  formatType() {
    let type = this.element.getAttribute('data-type');

    if (type) {
      type = type.toLowerCase();
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
  }

  extractDataAttributes() {
    return {
      options: this.getOptions(),
      difference: parseInt(this.element.getAttribute('data-difference'), 10) || 0,
      type: this.formatType() || DateTime.defaults().type,
      locale: this.element.getAttribute('data-locale') || DateTime.defaults().locale,
    };
  }
}


document.querySelectorAll('.s-date').forEach((dateElement) => {
  new DateTime(dateElement).setTextDate();
});
