import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <section className="home-hero">
        <div className="hero-container">
          <div className="hero-card">
            <h1 className="hero-title">Welcome to Todo App</h1>
            <p className="hero-desc">
              Todo App helps you capture and organize tasks quickly. Add new tasks, mark them
              complete, filter by status, and clear completed items. It's lightweight and easy to
              use — built to keep you focused and productive.
            </p>

            <Link to="/todo" className="cta-button">
              Go to Todo List
            </Link>

            <p className="hero-note">No sign-up required — your tasks are stored locally in your browser.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
