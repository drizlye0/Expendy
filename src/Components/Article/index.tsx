import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import React, { ComponentProps, PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import { Div, Text } from "react-native-magnus";

type ArticleType = {
  title: string;
  type: string;
  price: number;
  date: string;
};

interface ArticleContextType {
  article: ArticleType;
}

const ArticleContext = createContext<ArticleContextType | null>(null);

function useArticleContext(): ArticleContextType {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error("useArticleContext must be used within a Article");
  }

  return context;
}

interface ArticleProps {
  article: ArticleType;
  children: React.ReactNode;
  iconProps?: ComponentProps<typeof FontAwesome6>;
}

function Article({ children, article, iconProps }: ArticleProps) {
  return (
    <ArticleContext.Provider value={{ article }}>
      <Div flexDir="row" alignItems="center" p={10}>
        {iconProps ? (
          <FontAwesome6
            {...iconProps}
            style={{ fontSize: 18, marginRight: 10 }}
          />
        ) : (
          <FontAwesome6
            name="basket-shopping"
            iconStyle="solid"
            style={{ fontSize: 18, marginRight: 10 }}
          />
        )}
        {children}
      </Div>
    </ArticleContext.Provider>
  );
}

function Content({ children }: PropsWithChildren) {
  return (
    <Div flex={1} flexDir="row" justifyContent="space-between">
      {children}
    </Div>
  );
}

function Left({ children }: PropsWithChildren) {
  return <Div justifyContent="center">{children}</Div>;
}

function Right({ children }: PropsWithChildren) {
  return (
    <Div justifyContent="center" alignItems="flex-end">
      {children}
    </Div>
  );
}

function Title() {
  const { article } = useArticleContext();
  return (
    <Text fontWeight="bold" fontSize="md">
      {article.title}
    </Text>
  );
}

function Date() {
  const { article } = useArticleContext();

  return <Text fontSize="sm">{article.date}</Text>;
}

function Price() {
  const { article } = useArticleContext();

  return (
    <Text fontWeight="bold" fontSize="md">
      ${article.price}
    </Text>
  );
}

function Category() {
  const { article } = useArticleContext();

  return <Text fontSize="sm">{article.type}</Text>;
}

Article.Content = Content;
Article.Left = Left;
Article.Right = Right;
Article.Title = Title;
Article.Date = Date;
Article.Price = Price;
Article.Category = Category;

export { Article, ArticleType };
