import React from "react";
import { Card, CardContent, CardTitle } from "@/Components/Card";
import { ArticleType } from "@/Components/Article";
import Article from "@/Components/Article";
import type { FontAwesome6IconName } from "@react-native-vector-icons/fontawesome6";

interface ArticleData extends ArticleType {
  icon: FontAwesome6IconName;
}

const articles: Array<ArticleData> = [
  {
    title: "Bus fare",
    price: 12,
    type: "Transport",
    date: "2024-01-15",
    icon: "car",
  },


  {
    title: "Bus fare",
    price: 12,
    type: "Transport",
    date: "2024-01-15",
    icon: "car",
  },

  {
    title: "Bus fare",
    price: 12,
    type: "Transport",
    date: "2024-01-15",
    icon: "car",
  },

  {
    title: "Bus fare",
    price: 12,
    type: "Transport",
    date: "2024-01-15",
    icon: "car",
  },
];

export default function History() {
  return (
    <Card
      divProps={{
        minH: 100,
        mt: 18,
        mb: 18,
      }}
    >
      <CardContent divProps={{ flex: 0, flexDir: "column" }}>
        <CardTitle
          iconProps={{ name: "arrow-trend-up", iconStyle: "solid" }}
          title="Recent Expenses"
        />
        {articles.map((article, key) => {
          return (
            <Article
              key={key}
              article={article}
              iconProps={{
                name: article.icon,
                iconStyle: "solid",
              }}
            >
              <Article.Content>
                <Article.Left>
                  <Article.Title />
                  <Article.Date />
                </Article.Left>
                <Article.Right>
                  <Article.Price />
                  <Article.Category />
                </Article.Right>
              </Article.Content>
            </Article>
          );
        })}
      </CardContent>
    </Card>
  );
}
