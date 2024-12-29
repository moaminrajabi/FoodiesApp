import Link from "next/link";
import classes from "./page.module.css";

function mealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Dlicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favoritr recipe and cook it yourself. It is easy and fun
          😻
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">
          Share Your Favoritr Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        
      </main>
    </>
  );
}

export default mealsPage;
