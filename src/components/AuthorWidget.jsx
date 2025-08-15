import React from "react";

const AuthorWidget = ({ author }) => (
  <aside className="bg-white p-6 shadow-md rounded-lg">
    <img src={author.avatar} alt={author.name} className="w-20 h-20 rounded-full mx-auto" />
    <h3 className="text-lg font-bold text-center mt-4">{author.name}</h3>
    <p className="text-gray-500 text-center">{author.bio}</p>
    <div className="flex justify-center gap-3 mt-4">
      {author.socials.map(s => (
        <a key={s.platform} href={s.url} className="text-gray-600 hover:text-red-500">
          {s.platform}
        </a>
      ))}
    </div>
  </aside>
);

export default AuthorWidget;
