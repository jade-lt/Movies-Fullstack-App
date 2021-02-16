export async function deleteMovie(id) {
  const result = await fetch("/api/v1/movies/" + id, {
    method: "DELETE",
  });
  const data = await result.json();

  return data;
}

export async function getMovies() {
  const result = await fetch("/api/v1/movies");
  const data = await result.json();

  return data;
}

export async function getMovieByID(id) {
  const result = await fetch("/api/v1/movies/" + id);
  const data = await result.json();

  return data;
}

export async function addMovie(movieDetails) {
  const result = await fetch("/api/v1/movies", {
    method: "POST",
    body: JSON.stringify(movieDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();

  return data;
}

export const updateMovie = async (id, movieDetails) => {
  const result = await fetch(`/api/v1/movies/${id}`, {
    method: "PUT",
    body: JSON.stringify(movieDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();
  return data;
};
