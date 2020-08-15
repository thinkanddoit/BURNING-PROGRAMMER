import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class Flask extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Flask");

    const list = [
      /* image = 이미지
        imageText = 그 이미지 이름 */
        <DescriptionItem image={<img src={Image} alt="My Image"></img>} text={"Flask"} />,

        /* informationTitle = 설명 위에 타이틀
           그리고 chileren으로 설명을 넘겨주어야함  */
        <DescriptionItem informationTitle="Flask 란?">
        </DescriptionItem>,
  
        /* link = a 태그 */
        <DescriptionItem link={ <a href="" target="_blank">Flask</a> } />,
        <DescriptionItem informationTitle="Flask 활용 분야">
        </DescriptionItem>,
        <DescriptionItem myNameIs={ "Flask" } />,
    ]
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default Flask;