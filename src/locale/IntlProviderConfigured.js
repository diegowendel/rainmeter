import React, { cloneElement, Children, Component } from 'react';
import { IntlProvider } from 'react-intl';
import Languages from './Languages';
import translations from './translations.json';

class IntlProviderConfigured extends Component {

  constructor(props) {
    super(props);

    this.state = {
      locale: 'en-US'
    }

    this.onChangeLocale = this.onChangeLocale.bind(this);
  }

  componentDidMount() {
    const language = Languages[navigator.language];
    if (!language) {
      this.setState({ locale: `${Languages.default.code}` });
    } else {
      this.setState({ locale: language.code });
    }
  }

  onChangeLocale(locale) {
    this.setState({ locale });
  }

  render() {
    const children = Children.map(this.props.children, (child, index) => {
      return cloneElement(child, {
        index,
        locale: this.state.locale,
        onChangeLocale: this.onChangeLocale
      });
    });

    return (
      <IntlProvider locale={this.state.locale} messages={translations[this.state.locale]}>
        {children}
      </IntlProvider>
    );
  }
}

export default IntlProviderConfigured;
