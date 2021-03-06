import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class JavaScript extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Javascript");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Javascript" } />,
      <DescriptionItem informationTitle="Javascript 란? ">자바스크립트(JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. <br />이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다.<br /> 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다. <br />자바스크립트는 본래 넷스케이프 커뮤니케이션즈 코퍼레이션의 브렌던 아이크(Brendan Eich)가 처음에는 모카(Mocha)라는 이름으로, <br />나중에는 라이브스크립트(LiveScript)라는 이름으로 개발하였으며, 최종적으로 자바스크립트가 되었다. <br />자바스크립트가 썬 마이크로시스템즈의 자바와 구문이 유사한 점도 있지만,<br /> 이는 사실 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기 때문이고, 자바와 자바스크립트는 직접적인 관련성이 없다. <br />이름과 구문 외에는 자바보다 셀프나 스킴과 유사성이 많다.</DescriptionItem>,
      <DescriptionItem link="https://developer.mozilla.org/ko/docs/Web/JavaScript" />,
      <DescriptionItem informationTitle="Javascript 활용 분야">블록체인에 주로 사용된다.<br />
      Ethereum, IOTA, NEM, HyperledgerFabric, Neo등의 블록체인 개발에 사용된다.<br /><br />
      JavaScript(JS)는 가벼운 인터프리터 또는 JIT 컴파일 프로그래밍 언어로, 일급 함수를 지원합니다. 웹 페이지의 스크립트 언어로 또한 사용된다.
      </DescriptionItem>,
      <DescriptionItem myNameIs={ "Javascript" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default JavaScript;