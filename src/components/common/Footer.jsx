import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter style={{ textAlign: 'center' }}>
            © 2024 E-Commerce Platform. All rights reserved.
        </AntFooter>
    );
};

export default Footer;
