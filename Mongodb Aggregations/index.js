const getData = require("./db");

async function run() {
  const db = await getData();
  const dataset = await db.collection("dataset");
  const pipeline1 = [
    { $match: { countries: { $exists: true, $ne: [] } } },

    { $group: { _id: "$countries", count: { $sum: 1 } } },

    { $project: { country: "$_id", count: 1, _id: 0 } },

    { $sort: { count: -1 } },

    { $limit: 5 },
  ];

  const pipeline2 = [
    {
      $addFields: { visibility: "Hd" },
    },

    { $sample: { size: 3 } },
  ];

  const result1 = await dataset.aggregate(pipeline1).toArray();
  const result2 = await dataset.aggregate(pipeline2).toArray();
  const result3 = await dataset
    .aggregate({
      $match: { "awards.wins": { $gt: 0 }, year: { $gte: 1910, $lt: 1920 } },
    })
    .toArray();

  console.dir(result1);
  console.dir(result2);
  console.dir(result3);
}

run();
