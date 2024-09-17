import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SlidingWindow from './account';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Menu mode="horizontal" theme="dark" className="custom-navbar">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="shop" icon={<ShopOutlined />}>
                    <ScrollLink
                        to="products-section"
                        smooth={true}
                        duration={400}
                    >
                        Products
                    </ScrollLink>
                </Menu.Item>
                <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                    <Link to="/cart">Cart</Link>
                </Menu.Item>
                <Menu.Item key="account" icon={<UserOutlined />} onClick={showDrawer}>
                    Account
                </Menu.Item>
            </Menu>
            <SlidingWindow visible={visible} onClose={onClose} />
        </>
    );
};

export default Navbar;
