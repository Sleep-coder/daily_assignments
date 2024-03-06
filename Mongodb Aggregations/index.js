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

  const pipeline3 = [{ $sort: { "released.date": -1 } }, { $limit: 5 }];

  const pipeline4 = [
    { $match: { "awards.wins": { $gt: 0 }, year: { $gte: 1910, $lt: 1920 } } },
  ];

  const pipeline5 = [
    { $match: { genres: { $all: ["Drama"], $nin: ["Comedy"] } } },
  ];

  const pipeline6 = [
    { $unwind: "$awards.wins" },
    { $group: { _id: "$title", total_wins: { $sum: "$awards.wins" } } },
    { $sort: { total_wins: -1 } },
  ];

  const pipeline7 = [
    { $match: { genres: { $in: ["Animation"] }, year: { $gt: 1910 } } },
  ];

  const pipeline8 = [
    { $unwind: "$awards.wins" },
    { $group: { _id: "$title", total_wins: { $sum: "$awards.wins" } } },
    { $sort: { total_wins: -1 } },
  ];

  const pipeline9 = [
    { $unwind: "$countries" },
    { $group: { _id: "$countries", avg_rating: { $avg: "imdb.rating" } } },
  ];

  const pipeline10 = [{ $match: { "awards.wins": { $gt: 0 } } }];

  const pipeline11 = [{ $group: { _id: "$year", count: { $sum: 1 } } }];

  const pipeline12 = [{ $match: { runtime: { $gt: 120 } } }];

  const pipeline13 = [{ $match: { year: { $lt: 1910 } } }];

  const pipeline14 = [{ $sort: { "imdb.rating": -1 } }, { $limit: 10 }];

  const pipeline15 = [
    { $group: { _id: null, avg_runtime: { $avg: "$runtime" } } },
  ];

  const result1 = await dataset.aggregate(pipeline1).toArray();

  const result2 = await dataset.aggregate(pipeline2).toArray();

  const result3 = await dataset.aggregate(pipeline3).toArray();

  const result4 = await dataset.aggregate(pipeline4).toArray();

  const result5 = await dataset.aggregate(pipeline5).toArray();

  const result6 = await dataset.aggregate(pipeline6).toArray();

  const result7 = await dataset.aggregate(pipeline7).toArray();

  const result8 = await dataset.aggregate(pipeline8).toArray();

  const result9 = await dataset.aggregate(pipeline9).toArray();

  const result10 = await dataset.aggregate(pipeline10).toArray();

  const result11 = await dataset.aggregate(pipeline11).toArray();

  const result12 = await dataset.aggregate(pipeline12).toArray();

  const result13 = await dataset.aggregate(pipeline13).toArray();

  const result14 = await dataset.aggregate(pipeline14).toArray();

  const result15 = await dataset.aggregate(pipeline15).toArray();

  console.dir(result1);
  console.dir(result2);
  console.dir(result3);
  console.dir(result4);
  console.dir(result5);
  console.dir(result6);
  console.dir(result7);
  console.dir(result8);
  console.dir(result9);
  console.dir(result10);
  console.dir(result11);
  console.dir(result12);
  console.dir(result13);
  console.dir(result14);
  console.dir(result15);
}

run();
