import React, { useEffect } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Spinner } from 'react-bootstrap';

interface Categories {
  title: string;
  description: string;
  slug: string;
  image: string;
  totalItems: number;
}

export default function SectionCategories() {
  const router = useRouter();
  const { data, error } = useSWR<Categories[]>('/api/categories');

  return (
    <section className="categories">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div
              className="categories__item categories__large__item"
              style={data && data[0] ? { backgroundImage: `url(img/categories/${data[0].image})` } : {}}
            >
              <div className="categories__text">
                <h1>{data && data[0] ? data[0].title : ''}</h1>
                <p>{data && data[0] ? data[0].description : ''}</p>
                <a href={data && data[0] ? 'categories/' + data[0].slug : '#'}>Comprar agora</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {data && data.length > 0
                ? data.map((item, index) => {
                    if (index == 0) return null;
                    return (
                      <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div
                          className="categories__item"
                          style={
                            data && data[index] ? { backgroundImage: `url(img/categories/${data[index].image})` } : {}
                          }
                        >
                          <div className="categories__text">
                            <h4>{data && data[index] ? data[index].title : ''}</h4>
                            <p>{data && data[index] ? data[index].totalItems + ' itens' : ''}</p>
                            <a href={data && data[1] ? 'categories/' + data[index].slug : '#'}>Comprar agora</a>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : [...Array(4)].map((item) => {
                    return (
                      <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div className="categories__item justify-content-center">
                          <div className="categories__text">
                            <Spinner animation="border" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
