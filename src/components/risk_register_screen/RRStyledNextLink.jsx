import styled, {css} from 'styled-components'
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom"


/**
 * Wraps the React Router Link component and creates a delay after the link is clicked.
 */
class DelayLink extends React.Component {
  static propTypes = {
    /**
     * Milliseconds to wait before registering the click.
     */
    delay:        PropTypes.number,
    /**
     * Called after the link is clicked and before the delay timer starts.
     */
    onDelayStart: PropTypes.func,
    /**
     * Called after the delay timer ends.
     */
    onDelayEnd:   PropTypes.func
  };

  static defaultProps = {
    delay:        0,
    onDelayStart: () => {},
    onDelayEnd:   () => {}
  };

  static contextTypes = Link.contextTypes;

  constructor(props) {
    super(props);
    this.timeout = null;
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  /**
   * Called when the link is clicked
   *
   * @param {Event} e
   */
  handleClick = (e) => {

    this.props.pdfOnClick();

    const { replace, to, delay, onDelayStart, onDelayEnd } = this.props;
    const history = this.props.history

    onDelayStart(e, to);
    if (e.defaultPrevented) {
      return;
    }
    e.preventDefault();

    this.timeout = setTimeout(() => {
      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
      onDelayEnd(e, to);
    }, delay);
  };

  render() {
    const props = Object.assign({}, this.props);
    delete props.delay;
    delete props.onDelayStart;
    delete props.onDelayEnd;

    return (
      <Link {...props} onClick={this.handleClick} />
    );
  }
}

const RRStyledNextLink = styled(DelayLink)`

  font-family: inherit;
  background-color: #007079;
  border: none;
  color: white;
  padding: .5em 1rem;
  border-radius: .2rem;
  font-size: .9rem;
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  text-align: center;

`

export default withRouter(RRStyledNextLink)
