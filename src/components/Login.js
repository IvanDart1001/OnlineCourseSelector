/**
 * Created by lenovo on 2017/2/14.
 */
require('../styles/InputForm.scss')

import React from 'react'
import { Link }  from 'react-router'

let styleLink = {
  display:'block',
  width:260,
  height:35,
  color: '#6d4829',
  textDecoration: 'none',
  cursor: 'pointer'
};

export default class Login extends React.Component {
  render(){
    return(
      <div>
        <div className='grad'></div>
        <div className='header'>
          <div>Online<span>QuestSelector</span></div>
        </div>
        <br/>
        <div className='InputController'>
          <input type="text" placeholder="number" name="number"/><br/>
          <input type="password" placeholder="password" name="password"/><br/>
          <input type="button" value="登陆"/>
          <div className='RelocationBtn'>
            <Link style={styleLink} to='/'>Back to Index</Link>
          </div>
        </div>
        <div className='annonce'>本工具最终解释权归上海大学曹旻老师所有</div>
      </div>
    )
  }
}
