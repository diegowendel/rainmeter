import React, { PureComponent } from 'react';
import '../../styles/LanguageToggle.scss';

class LanguageToggle extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      toggleClass: 'toggle'
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const isEnglish = this.props.locale.startsWith("en");
    const toggleClass = isEnglish ? "toggle" : "toggle portuguese-selected";
    this.setState({ toggleClass });
  }

  onChange() {
    const isEnglish = this.props.locale.startsWith("en");
    const toggleClass = isEnglish ? "toggle portuguese-selected" : "toggle";
    this.setState({ toggleClass });
    this.props.onChangeLocale(this.props.locale.startsWith("en") ? "pt-BR" : "en-US");
  }

  render() {
    return (
      <div className="grid" onClick={this.onChange}>
        <div className="option-en">En</div>
        <div className="option-pt">Pt</div>
        <div className={this.state.toggleClass}>
          <div className="toggle-selector" />
        </div>
      </div>
    );
  }
}

export default LanguageToggle;
