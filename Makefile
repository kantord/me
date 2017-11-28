all: dist/index.html dist/cv.css dist/cv_daniel_kantor_developer.pdf

deploy: all
	rsync -r dist kdani@45.77.156.211:/home/kdani/cv-dist

dist/_tmp.html: src/cv.md
	cmark $^ --to html > $@

dist/cv.css: src/cv.sass dist/pdf.svg
	sass --scss $< | minify --mime "text/css" > $@

dist/index.html: src/header.html dist/_tmp.html src/footer.html
	cat $^ > $@

dist/cv_daniel_kantor_developer.pdf: dist/index.html dist/*
	weasyprint $< $@ --base-url dist

dist/pdf.svg: src/pdf.svg
	cp $< $@
