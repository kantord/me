all: dist/index.html dist/cv.css dist/cv_daniel_kantor_developer.pdf

deploy: all
	rsync -r dist kdani@45.77.156.211:/home/kdani/cv-dist

dist/_tmp.html: src/cv.md
	mkdir -p dist
	cmark $^ --to html --unsafe > $@

dist/cv.css: src/cv.scss dist/pdf.svg
	mkdir -p dist
	sass $< | minify --mime "text/css" > $@

dist/_inline_css.html: dist/cv.css
	mkdir -p dist
	echo "<style>" `cat $<` "</style>" > $@

dist/index.html: src/header.html dist/_tmp.html dist/_inline_css.html src/footer.html
	mkdir -p dist
	cp src/*.png dist
	cat $^ > $@

dist/cv_daniel_kantor_developer.pdf: dist/index.html dist/cv.css
	mkdir -p dist
	weasyprint $< $@ --base-url dist

dist/pdf.svg: src/pdf.svg
	mkdir -p dist
	cp $< $@
