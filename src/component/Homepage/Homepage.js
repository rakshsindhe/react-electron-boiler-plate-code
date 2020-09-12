import React from "react";
import "./Homepage.style.less";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const Homepage = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider style={{backgroundColor:"lightblue"}}>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Homepage;
