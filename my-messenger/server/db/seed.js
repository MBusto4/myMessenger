const db = require("./db");
const { User } = require("./models");
const Conversation = require("./models/conversation");
const Message = require("./models/message");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const lucas = await User.create({
    username: "Lucas",
    email: "lucas123@email.com",
    password: "123456",
    photoUrl:
      "https://static.boredpanda.com/blog/wp-content/uploads/2018/12/ai-image-generation-fake-faces-people-nvidia-5c18b20b472c2__700.jpg",
  });

  const stacy = await User.create({
    username: "Stacy",
    email: "stacy@email.com",
    password: "123456",
    photoUrl:
      "https://i.insider.com/52a5eabc69bedd1379312cf4?width=1000&format=jpeg&auto=webp",
  });

  const stacyConvo = await Conversation.create({
    user1Id: lucas.id,
    user2Id: stacy.id,
  });

  await Message.create({
    conversationId: stacyConvo.id,
    senderId: stacy.id,
    text: "Hey, where are you from?",
  });
  await Message.create({
    conversationId: stacyConvo.id,
    senderId: lucas.id,
    text: "I'm from Denver",
  });
  await Message.create({
    conversationId: stacyConvo.id,
    senderId: stacy.id,
    text: "Would you be so kind to share a photo of where you live?",
  });

  const mark = await User.create({
    username: "Mark",
    email: "mark@email.com",
    password: "123456",
    photoUrl:
      "https://static.generated.photos/vue-static/home/feed/adult.png",
  });
  const markConvo = await Conversation.create({
    user1Id: mark.id,
    user2Id: lucas.id,
  });
  await Message.create({
    conversationId: markConvo.id,
    senderId: mark.id,
    text: "Hey whatsup? just wanted to see what you were doing this weekend!",
  });

  const loretta = await User.create({
    username: "Loretta",
    email: "loretta@email.com",
    password: "123456",
    photoUrl:
      "https://kottke.org/plus/misc/images/ai-faces-01.jpg",
  });
  const lorettaConvo = await Conversation.create({
    user2Id: loretta.id,
    user1Id: lucas.id,
  });

  await Message.create({
    conversationId: lorettaConvo.id,
    senderId: loretta.id,
    text: "Hey, what are you going to wear tonight for the big show?",
  });

  const otherUsers = await Promise.all([
    ,
    User.create({
      username: "Michele",
      email: "michele@email.com",
      password: "123456",
      photoUrl:
        "https://www.thepoulduejensenfoundation.com/wp-content/uploads/2021/04/8.png",
    }),
    User.create({
      username: "Liya",
      email: "liya@email.com",
      password: "123456",
      photoUrl:
        "https://1.img-dpreview.com/files/p/TS560x560~forums/63132016/2a1e59e12f4543bea10f2385259c81cf",
    }),
    User.create({
      username: "Max",
      email: "max@email.com",
      password: "123456",
      photoUrl:
        "https://i.redd.it/qm2eo6qvlot51.jpg",
    }),
  ]);

  console.log(`seeded users and messages`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}
