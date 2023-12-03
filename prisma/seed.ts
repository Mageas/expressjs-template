import db from "../src/utils/database";

type Author = {
  firstName: string;
  lastName: string;
};

async function seed() {
  await Promise.all(
    getAuthors().map((author) =>
      db.author.create({
        data: {
          firstName: author.firstName,
          lastName: author.lastName,
        },
      })
    )
  );
}

seed();

function getAuthors(): Author[] {
  return [
    {
      firstName: "Guillaume",
      lastName: "Apollinaire",
    },
    {
      firstName: "Albert",
      lastName: "Camus",
    },
    {
      firstName: "Paul",
      lastName: "Eluard",
    },
    {
      firstName: "Victor",
      lastName: "Hugo",
    },
  ];
}
