import React, { Component } from 'react';
import Footer from './components/Footer';
import TableFilter from './components/TableFilter';
import FooterLinks from './components/FooterLinks';

export default class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page2-page">
        <Footer />
        {/* 筛选和表格组合 */}
        <TableFilter />
        {/* 通用的底部链接区块 */}
        <FooterLinks />
      </div>
    );
  }
}
