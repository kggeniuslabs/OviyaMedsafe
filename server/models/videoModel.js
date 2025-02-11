const db = require('../config/db');// Assuming you're using a connection pool for MySQL

exports.addVideo = async (video) => {
    try {
      const query = 'INSERT INTO ytvideos (video) VALUES (?)';
      const [result] = await db.execute(query, [video]);
      return result;
    } catch (error) {
      throw error;
    }
  };

exports.getAllVideos = async () => {
  try {
    const query = 'SELECT id,video,publish FROM ytvideos';
    const [rows] = await db.execute(query);
    return rows;
  } catch (error) {
    throw error;
  }
};

exports.deleteVideo = async (id) => {
  try {
    const [result] = await db.query('DELETE FROM ytvideos WHERE id = ?', [id]);
    return result.affectedRows;  // Return number of affected rows
  } catch (error) {
    throw error;
  }
};

exports.publishVideo = async (id, publish) => {
  try {
    const [result] = await db.query('UPDATE ytvideos SET publish = ? WHERE id = ?', [publish, id]);
    return result.affectedRows; // Return number of affected rows
  } catch (error) {
    throw error;
  }
};