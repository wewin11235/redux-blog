import React, {Component} from 'react';
import { Icon } from 'antd';
import Style from './categories_list.scss';
import { Link } from 'react-router-dom';


const CategoryListComponent = ({ state, loginSuccess, toggleArticle, toggleAddIcon }) => (
  <div className="categories-area">
    <ul className="categories-list">
      { state && state.categories && state.categories.length > 0
        ? state.categories.map((item) => {
            return <li key={item.id}>
                     <a
                       className={ state.active_id == item.id ? 'active' : ''}
                       onClick={ () => toggleArticle(item.id)}
                     >
                      {item.name}
                     </a>
                     <Link
                      to='/new-article'
                      className='nav-link'
                     >
                     {
                       loginSuccess &&
                        <Icon
                          type='plus'
                          className='article add'
                          onClick={() => toggleAddIcon(item.id)}
                        />
                      }
                     </Link>
                   </li>
          })
        : '加载中...'
      }
    </ul>
  </div>
)

export default CategoryListComponent;