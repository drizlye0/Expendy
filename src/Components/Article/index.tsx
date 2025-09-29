import React, { ComponentProps, PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import { Div, Text, Icon } from "react-native-magnus";

type ArticleType = {
  name: string;
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
  iconProps?: ComponentProps<typeof Icon>;
}

function Article({ children, article, iconProps }: ArticleProps) {
  return (
    <ArticleContext.Provider value={{ article }}>
      <Div flexDir="row" alignItems="center" p={10}>
        {iconProps ? (
          <Icon {...iconProps} fontSize={18} mr={10} fontFamily="FontAwesome" color="black" />
        ) : (
          <Icon name="shopping-basket" fontFamily="FontAwesome" fontSize={18} mr={10} color="black"/>
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
      {article.name}
    </Text>
  );
}

function ArticleDate() {
  const { article } = useArticleContext();
  const parsedDate = new Date(article.date)
  const formatedDate = new Intl.DateTimeFormat('en-US').format(parsedDate)

  return <Text fontSize="sm">{formatedDate}</Text>;
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

  return <Text fontSize="sm" fontWeight="bold">{article.type}</Text>;
}

Article.Content = Content;
Article.Left = Left;
Article.Right = Right;
Article.Title = Title;
Article.Date = ArticleDate;
Article.Price = Price;
Article.Category = Category;

export { Article, ArticleType };
