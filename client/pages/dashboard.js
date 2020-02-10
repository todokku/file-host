import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const Dashboard = () => (
	<div>
		<Head>
			<title>Dashboard</title>
			<link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://unpkg.com/awsm.css/dist/awsm.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" integrity="sha256-/8+sU56ayrJGahG9mmcUaNEghbavaceGybkdqO96Kk0=" crossOrigin="anonymous" />
		</Head>

		<Nav />

		<div className="hero">
			<h1 className="title">Dashboard</h1>
      <br />
      <div className="container">
        <div style={{ marginLeft: '10%', marginRight: '10%' }}>
          yo
        </div>
      </div>
		</div>

		<style jsx>{`
			.hero {
				width: 100%;
				color: #333;
			}
			.title {
				margin: 0;
				width: 100%;
				padding-top: 80px;
				line-height: 1.15;
				font-size: 48px;
			}
			.title,
			.description {
				text-align: center;
			}
			.row {
				max-width: 880px;
				margin: 80px auto 40px;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
			}
			.card {
				padding: 18px 18px 24px;
				width: 220px;
				text-align: left;
				text-decoration: none;
				color: #434343;
				border: 1px solid #9b9b9b;
			}
			.card:hover {
				border-color: #067df7;
			}
			.card h3 {
				margin: 0;
				color: #067df7;
				font-size: 18px;Dashboard

				padding: 12px 0 0;
				font-size: 13px;
				color: #333;
			}
		`}</style>
	</div>
);

export default Dashboard;
