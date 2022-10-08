import React from "react";



const Article = ({data}) => {
      console.log(data);

        return (
      <div class="group relative">
        <div class="min-h-50 w-100 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img src={`https://y82rz54sna.execute-api.us-east-1.amazonaws.com/dev/media/${data.imagen}`} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center w-100"/>
        </div>

        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-md text-gray-700">
              <a href={`articulo/${data.id}/${data.slug}`}>
                <span aria-hidden="true" class="absolute inset-0"></span>
                {data.titulo}
              </a>
            </h3>
          </div>
        </div>
      </div>
        )
}



export default Article;

