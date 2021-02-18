const fetchHeaderOptions = {
  "Content-Type": "application/json",
  token: window.localStorage.getItem("token"),
};

export async function deleteMovie(id) {
  const result = await fetch("/api/v1/movies/" + id, {
    method: "DELETE",
    headers: fetchHeaderOptions,
  });
  const data = await result.json();

  return data;
}

export async function getMovies() {
  const result = await fetch("/api/v1/movies", {
    headers: fetchHeaderOptions,
  });
  const data = await result.json();

  return data;
}

export async function getMovieByID(id) {
  const result = await fetch("/api/v1/movies/" + id, {
    headers: fetchHeaderOptions,
  });
  const data = await result.json();
  return data;
}

export async function addMovie(movieDetails) {
  const result = await fetch("/api/v1/movies", {
    method: "POST",
    body: JSON.stringify(movieDetails),
    headers: fetchHeaderOptions,
  });
  const data = await result.json();

  return data;
}

export const updateMovie = async (id, movieDetails) => {
  const result = await fetch(`/api/v1/movies/${id}`, {
    method: "PUT",
    body: JSON.stringify(movieDetails),
    headers: fetchHeaderOptions,
  });
  const data = await result.json();
  return data;
};

export async function login(userDetails) {
  const result = await fetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(userDetails),
    headers: fetchHeaderOptions,
  });

  return result.headers.get("token");
}
