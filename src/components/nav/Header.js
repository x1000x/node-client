import React from 'react';
import {Menu, Badge } from "antd";
import {
    AppstoreAddOutlined,
    SettingOutlined,
    UserAddOutlined,
    LogoutOutlined, 
    ShoppingOutlined,
    ShoppingCartOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";
import Search from "../forms/Search";
import useCurrentItemHeader from "../../hooks/useCurrentItemHeader";

const {SubMenu, Item} = Menu;


const Header = () => {
  const {setKey} = useCurrentItemHeader();
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart, header, user } = useSelector((state) => ({...state}));

  const logout = () =>{
      firebase.auth().signOut();
      dispatch({type : "LOGOUT", payload :null});
      history.push("/login");
  }

return (
    <Menu
        onClick={({key}) => setKey(key)}
        selectedKeys={[header]}
        mode="horizontal"
    >
        <Item key="home" icon={<AppstoreAddOutlined/> }>
            <Link to="/">Home</Link>
        </Item>

        <Item key="shop" icon={<ShoppingOutlined/> }>
            <Link to="/shop">Shop</Link>
        </Item>

        <Item key="cart" icon={<ShoppingCartOutlined/> }>
            <Link to="/cart">
                <Badge count={cart.leng} offset={[9, 0]}>
                    Cart
                </Badge>
            </Link>
        </Item>

        {!user && (
            <Item key="register" icon={<UserAddOutlined/>}>
                <Link to= "/register">Register</Link>
            </Item>            
        )}
        {!user && (
            <Item key="login" icon={<UserOutlined/>} className='float-right
            '>
                <Link to= "/login">Login</Link>
            </Item>            
        )}

        {

        }

    </Menu>
);
};

    
          
export default Header;
