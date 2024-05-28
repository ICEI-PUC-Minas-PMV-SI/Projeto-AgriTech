export default function getRelatory(currentView: string) {
  switch (currentView) {
    case "sales":
      return {
        title: "Vendas por mês",
        src: "https://app.powerbi.com/view?r=eyJrIjoiOTkxZTcwNjMtMjEwNy00OWViLThlZDItNzkzMDhkNmU4YTdjIiwidCI6IjE0Y2JkNWE3LWVjOTQtNDZiYS1iMzE0LWNjMGZjOTcyYTE2MSIsImMiOjh9"
      };
    case "region":
      return {
        title: "Quantidade de fornecedores por região e cidade",
        src: "https://app.powerbi.com/view?r=eyJrIjoiNTQ2OTFhNTEtZDZlYS00M2ZlLWE5MDEtMTU0ZTJiODVjYjcxIiwidCI6IjE0Y2JkNWE3LWVjOTQtNDZiYS1iMzE0LWNjMGZjOTcyYTE2MSIsImMiOjh9"
      };
    default:
      return {
        title: "Vendas por mês",
        src: "https://app.powerbi.com/view?r=eyJrIjoiOTkxZTcwNjMtMjEwNy00OWViLThlZDItNzkzMDhkNmU4YTdjIiwidCI6IjE0Y2JkNWE3LWVjOTQtNDZiYS1iMzE0LWNjMGZjOTcyYTE2MSIsImMiOjh9"
      };  
  }
}
