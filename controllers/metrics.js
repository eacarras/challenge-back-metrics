const express = require('express');
const MetricsModel = require('../models/metrics');

const router = express.Router();

/**
 * route: /:type
 * description: the idea is to get some metrics giving a specific type
 */
router.get('/:type', async (req, res) => {
  const { type } = req.params;

  try {
    const data = await MetricsModel.getMetricsByType(type);

    return res.status(200).json({
      message: 'Information get successfully',
      data,
    });
  } catch (err) {
    console.error('ERROR TO GET THE METRICS INFORMATION', err.track);
    return res.status(err.statusCode).json({ message: err.message });
  }
});


module.exports = router;