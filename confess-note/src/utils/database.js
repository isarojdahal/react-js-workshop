import { onValue, ref, database as db, set } from "../config/firebase";

export function deleteData() {
  onValue(ref(db, "confessions"), (snapshot) => {
    let _data = snapshot.val();

    for (let key in _data) {
      let createdAt = new Date(_data[key].createdAt);
      createdAt.setDate(createdAt.getDate() + 1); // 24hrs.

      if (new Date() >= createdAt) {
        set(ref(db, "confessions/" + key), null);
        console.log("execeded 24 hrs; it has to be deleted from db.. ");
      }
    }
  });
}
