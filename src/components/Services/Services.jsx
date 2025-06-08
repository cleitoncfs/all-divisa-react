import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="servicos" className={styles.servicos}>
      <div className="container">
        <h2>Nossos Serviços</h2>
        <div className={styles.servicosGrid}>
          <div className={styles.servico}>
            <h3>Divisória de Escritório / Naval</h3>
            <p>
              Ideal para ambientes corporativos, proporcionando
              praticidade e elegância.
            </p>
          </div>
          <div className={styles.servico}>
            <h3>Divisória Drywall / Gesso Acartonado</h3>
            <p>
              Leve, resistente e com ótimo isolamento acústico e
              térmico.
            </p>
          </div>
          <div className={styles.servico}>
            <h3>Divisória em PVC</h3>
            <p>
              Durável, fácil de limpar e indicada para ambientes
              úmidos.
            </p>
          </div>
          <div className={styles.servico}>
            <h3>Forro Drywall</h3>
            <p>
              Acabamento sofisticado e funcional para tetos
              rebaixados.
            </p>
          </div>
          <div className={styles.servico}>
            <h3>Forro de Isopor</h3>
            <p>
              Ótima opção térmica e econômica, com montagem
              rápida.
            </p>
          </div>
          <div className={styles.servico}>
            <h3>Persianas</h3>
            <p>
              Modelos variados para controle de luz, conforto e
              estética.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}