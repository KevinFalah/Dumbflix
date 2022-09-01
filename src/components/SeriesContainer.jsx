import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SeriesList from './SeriesList';
import {useState} from 'react';
import youSeries from '../Images/you.png'

function SeriesContainer() {
    const [seriesList, setSeriesList] = useState(
        [
            {
                seriesImg: youSeries,
                title:"You",
                year: 2022
            },
            {
                seriesImg: youSeries,
                title:"You",
                year: 2022
            },
            {
                seriesImg: youSeries,
                title:"You",
                year: 2022
            },
            {
                seriesImg: youSeries,
                title:"You",
                year: 2022
            },
            {
                seriesImg: youSeries,
                title:"You",
                year: 2022
            },
            {
                seriesImg: youSeries,
                title:"You",
                year: 2022
            }
        ]
    )

  return (
    <div >
      <Container className="my-5 overflow-hidden" id="" >
        <h3 className="text-light">TV Series</h3>
        <Row>
          {seriesList.map((series, index) => {
            return(
                <Col md={2} key={index}>
                    <SeriesList 
                        seriesImg={series.seriesImg}
                        title={series.title}
                        year={series.year}
                    /> {/* Looping */}
                </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default SeriesContainer;
