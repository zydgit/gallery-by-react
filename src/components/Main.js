require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

/**
 * [解析json文件得到数据源]
 * @type js数组对象
 */
let imageDatas = require('../data/imageDatas.json');


/**
 * getImageURL 可用image-loder取得图像名对于的路径
 * @param  {[]}
 * @return {[]}                                                                    
 */
imageDatas = (function getImageURL(imageDataArr){

	imageDataArr.forEach(function(item){
		item.imageUrl = require("../images/"+itesm.fileName);
	});

	return imageDataArr;
})(imageDatas);






class AppComponent extends React.Component {
  render() {
    return (
    	<section className="stage">
    		<section className="img-sec">
    		</section>
    		<nav className="controller-nav">
			</nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
