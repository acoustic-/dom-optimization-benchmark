import React, { Component } from 'react';
import './App.css';
import RowItem from './components/RowItem.js';

class App extends Component {

  constructor() {
        super();
        this.state = {
            count: 0
        };
    }

  render() {
    return (
      <div id="wrap">
        <div className="header">
          <h1>Virtual DOM Imp&shy;le&shy;ment&shy;ation</h1>
          <span className="subheader">~ with React ~</span>
          <div className="btn-row">
            <button className="btn btn-primary outline" id="update-all" onClick={() => this.updateAll()}>Update All!</button>
            <button className="btn btn-primary outline" id="update-part" onClick={() => this.updateSome()}>Update Part!</button>
            <button className="btn btn-primary outline" id="remove" onClick={() => this.remove()}>Remove!</button>
          </div>
          <div className="btn-row">
            <button className="btn btn-primary outline add-btn" onClick={() => this.add(1000)}>1000</button>
            <button className="btn btn-primary outline add-btn" onClick={() => this.add(3000)}>3000</button>
            <button className="btn btn-primary outline add-btn" onClick={() => this.add(6000)}>6000</button>
            <button className="btn btn-primary outline add-btn" onClick={() => this.add(10000)}>10000</button>
            <button className="btn btn-primary outline add-btn" onClick={() => this.add(30000)}>30000</button>
            <button className="btn btn-primary outline add-btn" onClick={() => this.add(60000)}>60000</button>
            <button className="btn btn-primary outline add-btn" onClick={() => this.add(100000)}>100000</button>
          </div>
        </div>

        <div className="container" id="container-for-row-items">
          { this.renderItems() }
        </div>
      </div>
    );
  }

  renderItems() {
    let items = [];
    var _refi = 0;
    var makeRef = function () { return 'RowItem-' + (_refi++); };
    for (var i = 0; i < this.state.count; ++i) {
      var val = "item-" + i;
      items.push(<RowItem ref={ makeRef() } key={ val }></RowItem>);
    }
    return items;
  }

  // refsToArray and makeRef functions based on: http://stackoverflow.com/a/27561036
  refsToArray(ctx, prefix) {
    let results = [];
    for (var i = 0; ; i++) {
      var ref = ctx.refs[prefix + '-' + String(i)];
      if (ref) results.push(ref);
      else return results;
    }
  }

  add(count) {
    this.setState({count: count})
  }

  updateAll() {
    this.refsToArray(this, "RowItem").forEach( (i) => i.update() );
    this.scrollToBottom();
  }

  updateSome() {
    this.refsToArray(this, "RowItem").forEach( (i) => i.updateSome() );
    this.scrollToBottom();
  }

  remove() {
    this.setState({count: 0});
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

}

export default App;
