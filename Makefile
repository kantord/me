all: dist/cv.html

dist/_tmp.html: src/cv.md
	cmark $^ --to html > $@

dist/cv.html: src/header.html dist/_tmp.html src/footer.html
	cat $^ > $@
