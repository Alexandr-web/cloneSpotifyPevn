import host from "../server/host";

export default {
  actions: {
    async edit({ }, { fd, userId, token, }) {
      try {
        const res = await fetch(`${host}/profile/edit/${userId}`, {
          method: "PUT",
          headers: {
            "Accept-Type": "application/json",
            Authorization: `Bearer ${token || ""}`,
          },
          body: fd,
        });

        return res.json();
      } catch (err) {
        throw err;
      }
    },

    async getAudio({ }, { userId, token, }) {
      try {
        const res = await fetch(`${host}/profile/api/${userId}/audio`, {
          method: "GET",
          headers: {
            "Accept-Type": "application/json",
            Authorization: `Bearer ${token || ""}`,
          },
        });

        return res.json();
      } catch (err) {
        throw err;
      }
    },

    async getPlaylists({ }, { userId, token, }) {
      try {
        const res = await fetch(`${host}/profile/api/${userId}/playlists`, {
          method: "GET",
          headers: {
            "Accept-Type": "application/json",
            Authorization: `Bearer ${token || ""}`,
          },
        });

        return res.json();
      } catch (err) {
        throw err;
      }
    },

    async getDataForEditPlaylist({ }, { playlistId, token, }) {
      try {
        const res = await fetch(`${host}/profile/api/edit/playlist/${playlistId}`, {
          method: "GET",
          headers: {
            "Accept-Type": "application/json",
            Authorization: `Bearer ${token || ""}`,
          },
        });

        return res.json();
      } catch (err) {
        throw err;
      }
    },

    async getAudioAndFavorite({ }, { userId, token, }) {
      try {
        const res = await fetch(`${host}/profile/api/${userId}/audio?favorite=true`, {
          method: "GET",
          headers: {
            "Accept-Type": "application/json",
            Authorization: `Bearer ${token || ""}`,
          },
        });

        return res.json();
      } catch (err) {
        throw err;
      }
    },
  },
};