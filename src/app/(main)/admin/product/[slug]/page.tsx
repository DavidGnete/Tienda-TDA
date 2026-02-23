"use client";

import styles from "./ProductForm.module.css";
import clsx from "clsx";

export default function ProductForm() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.pageContainer}>

        {/* ── Encabezado ── */}
        <div className={styles.pageHeader}>
          <div className={styles.breadcrumb}>
            <span>Mis productos</span>
            <span className={styles.sep}>›</span>
            <span className={styles.current}>Publicar nuevo producto</span>
          </div>
          <h1>Publica tu producto</h1>
          <p>
            Completa la información para que otros estudiantes puedan
            encontrarlo y contactarte.
          </p>
        </div>

        {/* ── Card ── */}
        <div className={styles.formCard}>

          {/* ── Sección 1: Información ── */}
          <div className={styles.formSection}>
            <div className={styles.sectionLabel}>
              <span className={styles.stepBadge}>1</span>
              <h2>Información del producto</h2>
            </div>

            <div className={styles.formGrid}>

              {/* Nombre */}
              <div className={clsx(styles.field, styles.full)}>
                <label className={styles.label}>
                  Nombre del producto <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Ej: Calculadora científica Casio FX-991"
                />
              </div>

              {/* Precio */}
              <div className={styles.field}>
                <label className={styles.label}>
                  Precio <span className={styles.required}>*</span>
                  <span className={styles.hint}>en pesos colombianos</span>
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputPrefix}>$</span>
                  <input
                    type="number"
                    className={clsx(styles.input, styles.withPrefix, styles.withSuffix)}
                    placeholder="25.000"
                  />
                  <span className={styles.inputSuffix}>COP</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className={styles.field}>
                <label className={styles.label}>
                  Número de WhatsApp <span className={styles.required}>*</span>
                </label>
                <div className={styles.whatsappWrapper}>
                  <span className={styles.whatsappPrefix}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.whatsappIcon}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    +57
                  </span>
                  <input
                    type="tel"
                    className={clsx(styles.input, styles.whatsappInput)}
                    placeholder="300 123 4567"
                  />
                </div>
              </div>

              {/* Descripción */}
              <div className={clsx(styles.field, styles.full)}>
                <label className={styles.label}>
                  Descripción <span className={styles.required}>*</span>
                </label>
                <textarea
                  className={styles.textarea}
                  placeholder="Describe tu producto: estado, características, por qué lo vendes, qué incluye..."
                  rows={5}
                />
              </div>

            </div>
          </div>

          {/* ── Sección 2: Fotos ── */}
          <div className={styles.formSection}>
            <div className={styles.sectionLabel}>
              <span className={styles.stepBadge}>2</span>
              <h2>Fotos del producto</h2>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                Imágenes <span className={styles.required}>*</span>
                <span className={styles.hint}>máximo 5 fotos</span>
              </label>
              <label className={styles.fileDropzone}>
                <div className={styles.dropzoneInner}>
                  <span className={styles.dropzoneIcon}>📷</span>
                  <span className={styles.dropzoneTitle}>Sube tus fotos aquí</span>
                  <span className={styles.dropzoneSubtitle}>
                    JPG, PNG o WEBP · Máx. 5 MB por foto · Hasta 5 imágenes
                  </span>
                  <span className={styles.dropzoneBtn}>Seleccionar archivos</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className={styles.fileInput}
                />
              </label>
            </div>
          </div>

          {/* ── Footer / Submit ── */}
          <div className={styles.formFooter}>
            <p className={styles.footerNote}>
              Al publicar, aceptas que otros estudiantes del{" "}
              <strong>Tecnológico de Antioquia</strong> podrán ver y contactarte
              por tu producto.
            </p>
            <div className={styles.btnGroup}>
              <button type="button" className={styles.btnGhost}>
                Cancelar
              </button>
              <button type="submit" className={styles.btnPrimary}>
                <span className={styles.btnAccentDot} />
                Publicar producto
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}