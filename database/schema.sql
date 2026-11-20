CREATE DATABASE IF NOT EXISTS ucu_lost_found;

USE ucu_lost_found;

CREATE TABLE reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type ENUM('lost', 'found') NOT NULL,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(100) NOT NULL,
    location VARCHAR(150) NOT NULL,
    date DATE NOT NULL,
    description TEXT NOT NULL,
    private_details TEXT,
    photo VARCHAR(255),
    status ENUM('open', 'returned') DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
