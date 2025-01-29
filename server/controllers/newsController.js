const newsModel = require("../models/newsModel");

// Get all news
exports.getAllNews = async (req, res) => {
  try {
    const news = await newsModel.getAllNews();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
};

// Get news by ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await newsModel.getNewsById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
};

// Create new news
exports.createNews = async (req, res) => {
  
  try {
    const { category_id, news_title, news_short_title, date, news_content } = req.body;
    const image = req.file ? req.file.filename : null;

    // Validate required fields
    if (!category_id || !news_title || !news_short_title || !date || !news_content) {
      return res.status(400).json({ message: "All fields except 'image' are required" });
    }

    const newsId = await newsModel.createNews({
      category_id,
      news_title,
      news_short_title,
      date,
      image,
      news_content,
    });

    res.status(201).json({ message: "News created successfully", newsId });
  } catch (error) {
    res.status(500).json({ error: "Failed to create news" });
  }
};

// Update news by ID
// exports.updateNews = async (req, res) => {
//   try {
//     const { category_id, news_title, news_short_title, news_content } = req.body;
//     const image = req.file ? req.file.filename : null;
//     const id=req.params.id;
//     console.log(id)

//     console.log("con",news_title,news_short_title,news_content,category_id,image)
//     // Validate required fields
//     if (!category_id || !news_title || !news_short_title || !date || !news_content) {
//       return res.status(400).json({ message: "All fields except 'image' are required" });
//     }

//     const affectedRows = await newsModel.updateNews(id, {
//       category_id,
//       news_title,
//       news_short_title,
      
//       image,
//       news_content,
//     });

//     if (affectedRows === 0) {
//       return res.status(404).json({ message: "News not found or no changes made" });
//     }

//     res.status(200).json({ message: "News updated successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update news" });
//   }
// };
exports.updateNews = async (req, res) => {
  try {
    const { category_id, news_title, news_short_title,date, news_content } = req.body;
    const image = req.file ? req.file.filename : null;
    const id = req.params.id;
    // Validate required fields
    if (!category_id || !news_title || !news_short_title || !date || !news_content ) {
      return res.status(400).json({ message: "All fields except 'image' are required" });
    }

    // Prepare the update data
    const updateData = {
      category_id,
      news_title,
      news_short_title,
      news_content,
      date
      
    };

    if (image) {
      updateData.image = image; // Only add 'image' if a new file is uploaded
    }

    // Call the model to update the news
    const affectedRows = await newsModel.updateNews(id, updateData);

    if (affectedRows === 0) {
      return res.status(404).json({ message: "News not found or no changes made" });
    }

    res.status(200).json({ message: "News updated successfully" });
  } catch (error) {
    console.error("Error updating news:", error);
    res.status(500).json({ error: "Failed to update news" });
  }
};

// Delete news by ID
exports.deleteNews = async (req, res) => {
  try {
    const affectedRows = await newsModel.deleteNews(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete news" });
  }
};

// Update publish field by ID
exports.updatePublish = async (req, res) => {
  try {
    const { publish } = req.body;

    // Validate required field
    if (publish === undefined) {
      return res.status(400).json({ message: "'publish' field is required" });
    }

    const affectedRows = await newsModel.updatePublish(req.params.id, publish);

    if (affectedRows === 0) {
      return res.status(404).json({ message: "News not found or no changes made" });
    }

    res.status(200).json({ message: "Publish status updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update publish status" });
  }
};




