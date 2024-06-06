let lenis;
const initSmoothScrolling = () => {
    (lenis = new Lenis({
      lerp: 0.08,
      easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
      smoothWheel: !0,
    })).on("scroll", ScrollTrigger.update);
    let e = (t) => {
      lenis.raf(t), requestAnimationFrame(e);
    };
    requestAnimationFrame(e);
  },
  mobileScreenHeight = () => {
    let e = 0.01 * window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${e}px`);
  },
  fnBrowserDetect = () => {
    let e = navigator.userAgent,
      t;
    (t = e.match(/chrome|chromium|crios/i)
      ? "chrome"
      : e.match(/firefox|fxios/i)
      ? "firefox"
      : e.match(/safari/i)
      ? "safari"
      : e.match(/opr\//i)
      ? "opera"
      : e.match(/edg/i)
      ? "edge"
      : "No browser detection"),
      document.querySelector("html").classList.add(t);
  },
  mobileCheck = () => {
    function e() {
      return "ontouchstart" in window || navigator.maxTouchPoints;
    }
    e()
      ? ($("#wrapper").addClass("touch"), $("#wrapper").removeClass("no-touch"))
      : ($("#wrapper").removeClass("touch"),
        $("#wrapper").addClass("no-touch")),
      $(window).resize(function () {
        e()
          ? ($("#wrapper").addClass("touch"),
            $("#wrapper").removeClass("no-touch"))
          : ($("#wrapper").removeClass("touch"),
            $("#wrapper").addClass("no-touch"));
      });
  },
  mobileMenuToggle = () => {
    $(".hamburger_btn").click(function () {
      $("body").toggleClass("nav-active"), $(this).toggleClass("open");
    });
  },
  closeMobileMenu = () => {
    $("body .mobile_menu a, .mobile_menu--wrapper > .overlay").on(
      "click",
      function () {
        $("body").removeClass("nav-active"),
          $(".hamburger_btn").removeClass("open");
      }
    );
  },
  cursorFollower = () => {
    let e = document.querySelector(".cursor__pointer"),
      t = document.querySelectorAll(".link"),
      n = document.querySelectorAll(".single_project"),
      i = document.querySelectorAll(".grid_playground > .single"),
      o = 0,
      r = 0;
    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(e, { css: { left: o, top: r } });
      },
    }),
      window.addEventListener("mousemove", (e) => {
        (o = e.clientX), (r = e.clientY);
      }),
      t.forEach((t) => {
        t.addEventListener("mousemove", () => {
          e.classList.add("active");
        }),
          t.addEventListener("mouseleave", () => {
            e.classList.remove("active");
          });
      }),
      n.forEach((t) => {
        t.addEventListener("mousemove", () => {
          e.classList.add("active_projects");
        }),
          t.addEventListener("mouseleave", () => {
            e.classList.remove("active_projects");
          });
      }),
      i.forEach((t) => {
        t.addEventListener("mousemove", () => {
          e.classList.add("active_playground");
        }),
          t.addEventListener("mouseleave", () => {
            e.classList.remove("active_playground");
          });
      });
  },
  magneticMenuItems = () => {
    jQuery(".menu-item").addClass("magnetic"),
      jQuery(".menu-item a").addClass("link");
    var e = document.querySelectorAll(".magnetic"),
      t = 25;
    if (window.innerWidth > 540) {
      e.forEach((e) => {
        e.addEventListener("mousemove", n),
          e.addEventListener("mouseout", function (e) {
            TweenMax.to(e.currentTarget, 1, {
              x: 0,
              y: 0,
              ease: Power4.easeOut,
            });
          });
      });
      function n(e) {
        var n = e.currentTarget,
          i = n.getBoundingClientRect();
        TweenMax.to(n, 1, {
          x: ((e.clientX - i.left) / n.offsetWidth - 0.5) * t,
          y: ((e.clientY - i.top) / n.offsetHeight - 0.5) * t,
          ease: Power4.easeOut,
        });
      }
    }
  },
  lottieLogo = () => {
    let e = document.getElementById("logo_lottie"),
      t,
      n = !0;
    (t = bodymovin.loadAnimation({
      container: e,
      renderer: "svg",
      loop: !1,
      autoplay: !1,
      path: "/json/logo_animation.json",
    })).addEventListener("complete", () => {
      n = !0;
    }),
      e.addEventListener("mouseover", () => {
        n && (t.goToAndPlay(0, !0), (n = !1));
      });
  },
  stickyHeader = () => {
    !(function (e) {
      var t = 0,
        n = e(window),
        i = e("#header");
      n.on("scroll", function () {
        var e = n.scrollTop();
        i.toggleClass("hide-navbar", e > t), (t = e);
      }),
        e(window).scroll(function () {
          300 >= e(this).scrollTop() && e("#header").removeClass("hide-navbar");
        });
    })(jQuery);
  },
  videoSrcScript = () => {
    function e() {
      let e = window.navigator,
        t = e.userAgent.toLowerCase(),
        n = !!(e.mediaCapabilities && e.mediaCapabilities.decodingInfo),
        i =
          -1 != t.indexOf("safari") &&
          !(-1 != t.indexOf("chrome")) &&
          -1 != t.indexOf("version/");
      return i && n;
    }
    let t = document.getElementById("cta_video");
    $(t).length > 0 &&
      (t.src = e()
        ? "/assets/videos/maneki_neko.mov"
        : "/assets/videos/maneki_neko.webm");
    let n = document.getElementById("gyro");
    $(n).length > 0 &&
      (n.src = e() ? "/assets/videos/gyro.mov" : "/assets/videos/gyro.webm");
    let i = document.getElementById("abstract_hands");
    $(i).length > 0 &&
      (i.src = e()
        ? "/assets/videos/abstract_hands.mov"
        : "/assets/videos/abstract_hands.webm");
    let o = document.getElementById("astronaut");
    $(o).length > 0 &&
      (o.src = e()
        ? "/assets/videos/astronaut_1.mov"
        : "/assets/videos/astronaut_1.webm");
  },
  globalAnimation = () => {
    let e = gsap.utils.toArray("[data-animation='fade']");
    e.forEach((e) => {
      gsap.to(e, {
        opacity: 1,
        ease: Power1.ease,
        delay: e.dataset.delay,
        scrollTrigger: {
          trigger: e,
          start: "top 80%",
          toggleActions: "play none none none",
          id: "fade",
        },
      });
    });
    let t = gsap.utils.toArray("[data-animation='fade-up']");
    t.forEach((e) => {
      gsap.to(e, {
        opacity: 1,
        y: 0,
        ease: Power1.ease,
        delay: e.dataset.delay,
        scrollTrigger: {
          trigger: e,
          start: "top 80%",
          toggleActions: "play none none none",
          id: "fade up",
        },
      });
    });
    let n = gsap.utils.toArray("[data-animation='fade-down']");
    n.forEach((e) => {
      gsap.to(e, {
        opacity: 1,
        y: 0,
        ease: Power1.ease,
        delay: e.dataset.delay,
        scrollTrigger: {
          trigger: e,
          start: "top 80%",
          toggleActions: "play none none none",
          id: "fade up",
        },
      });
    });
    let i = gsap.utils.toArray("[data-animation='animated-list']");
    i.forEach((e) => {
      gsap.to(e.querySelectorAll("li"), {
        opacity: 1,
        x: 0,
        ease: Power1.ease,
        stagger: e.dataset.stagger,
        delay: e.dataset.delay,
        scrollTrigger: {
          trigger: e,
          start: "top 80%",
          toggleActions: "play none none none",
          id: "animated list",
        },
      });
    });
    let o = new SplitText("[data-animation='chars']", {
      type: "words,chars",
      wordsClass: "word",
    });
    o.chars;
    let r = gsap.utils.toArray("[data-animation='chars']");
    r.forEach((e) => {
      e.classList.add("animation-assigned"),
        (e.style.visibility = "visible"),
        gsap.to(e.querySelectorAll(".word div"), {
          duration: 0.8,
          y: 0,
          ease: Power4.easeOut,
          stagger: e.dataset.stagger,
          delay: e.dataset.delay,
          scrollTrigger: {
            trigger: e,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
    });
    let a = new SplitText("[data-animation='words']", {
      type: "words,lines",
      linesClass: "line",
    });
    a.words;
    let s = gsap.utils.toArray("[data-animation='words']");
    s.forEach((e) => {
      (e.style.visibility = "visible"),
        gsap.to(e.querySelectorAll(".line div"), {
          duration: 0.8,
          y: 0,
          ease: Power4.easeOut,
          stagger: e.dataset.stagger,
          delay: e.dataset.delay,
          scrollTrigger: {
            trigger: e,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
    });
  },
  ctaReveal = () => {
    let e = document.querySelector(".cta_footer--container");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: e,
          start: "top 80%",
          end: "bottom bottom",
          scrub: !0,
          id: "cta reveal",
        },
      })
      .fromTo(e, { y: -250, opacity: 1 }, { y: 0, opacity: 1 });
  },
  checkWebpSupport = () => {
    var e = !1,
      t = new Image();
    function n() {
      for (
        var t = document.getElementsByTagName("img"), n = 0;
        n < t.length;
        n++
      ) {
        var i = t[n],
          o = i.getAttribute("data-src-jpg"),
          r = i.getAttribute("src");
        if (e && r && r.toLowerCase().endsWith(".webp")) {
          var a = new XMLHttpRequest();
          a.open("HEAD", r, !1),
            a.send(),
            200 === a.status
              ? i.setAttribute("src", r)
              : i.setAttribute("src", o);
        } else o && i.setAttribute("src", o);
      }
    }
    (t.onload = function () {
      (e = t.width > 0 && t.height > 0), n();
    }),
      (t.onerror = function () {
        n();
      });
  },
  homeHeroGradient = () => {
    var e;
    function t(e) {
      return [((e >> 16) & 255) / 255, ((e >> 8) & 255) / 255, (255 & e) / 255];
    }
    ["SCREEN", "LINEAR_LIGHT"].reduce(
      (e, t, n) => Object.assign(e, { [t]: n }),
      {}
    );
    class n {
      constructor(e, t, n, i = !1) {
        let o = this,
          r =
            -1 !==
            document.location.search.toLowerCase().indexOf("debug=webgl");
        (o.canvas = e),
          (o.gl = o.canvas.getContext("webgl", { antialias: !0 })),
          (o.meshes = []);
        let a = o.gl;
        t && n && this.setSize(t, n),
          o.lastDebugMsg,
          (o.debug =
            i && r
              ? function (e) {
                  let t = new Date();
                  t - o.lastDebugMsg > 1e3 && console.log("---"),
                    console.log(
                      t.toLocaleTimeString() +
                        Array(Math.max(0, 32 - e.length)).join(" ") +
                        e +
                        ": ",
                      ...Array.from(arguments).slice(1)
                    ),
                    (o.lastDebugMsg = t);
                }
              : () => {}),
          Object.defineProperties(o, {
            Material: {
              enumerable: !1,
              value: class {
                constructor(e, t, n = {}) {
                  let i = this;
                  function r(e, t) {
                    let n = a.createShader(e);
                    return (
                      a.shaderSource(n, t),
                      a.compileShader(n),
                      a.getShaderParameter(n, a.COMPILE_STATUS) ||
                        console.error(a.getShaderInfoLog(n)),
                      o.debug("Material.compileShaderSource", { source: t }),
                      n
                    );
                  }
                  function s(e, t) {
                    return Object.entries(e)
                      .map(([e, n]) => n.getDeclaration(e, t))
                      .join("\n");
                  }
                  (i.uniforms = n), (i.uniformInstances = []);
                  let l =
                    "\n              precision highp float;\n            ";
                  (i.vertexSource = `
              ${l}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${s(o.commonUniforms, "vertex")}
              ${s(n, "vertex")}
              ${e}
            `),
                    (i.Source = `
              ${l}
              ${s(o.commonUniforms, "fragment")}
              ${s(n, "fragment")}
              ${t}
            `),
                    (i.vertexShader = r(a.VERTEX_SHADER, i.vertexSource)),
                    (i.fragmentShader = r(a.FRAGMENT_SHADER, i.Source)),
                    (i.program = a.createProgram()),
                    a.attachShader(i.program, i.vertexShader),
                    a.attachShader(i.program, i.fragmentShader),
                    a.linkProgram(i.program),
                    a.getProgramParameter(i.program, a.LINK_STATUS) ||
                      console.error(a.getProgramInfoLog(i.program)),
                    a.useProgram(i.program),
                    i.attachUniforms(void 0, o.commonUniforms),
                    i.attachUniforms(void 0, i.uniforms);
                }
                attachUniforms(e, t) {
                  let n = this;
                  void 0 === e
                    ? Object.entries(t).forEach(([e, t]) => {
                        n.attachUniforms(e, t);
                      })
                    : "array" == t.type
                    ? t.value.forEach((t, i) =>
                        n.attachUniforms(`${e}[${i}]`, t)
                      )
                    : "struct" == t.type
                    ? Object.entries(t.value).forEach(([t, i]) =>
                        n.attachUniforms(`${e}.${t}`, i)
                      )
                    : (o.debug("Material.attachUniforms", {
                        name: e,
                        uniform: t,
                      }),
                      n.uniformInstances.push({
                        uniform: t,
                        location: a.getUniformLocation(n.program, e),
                      }));
                }
              },
            },
            Uniform: {
              enumerable: !1,
              value: class {
                constructor(e) {
                  (this.type = "float"),
                    Object.assign(this, e),
                    (this.typeFn =
                      {
                        float: "1f",
                        int: "1i",
                        vec2: "2fv",
                        vec3: "3fv",
                        vec4: "4fv",
                        mat4: "Matrix4fv",
                      }[this.type] || "1f"),
                    this.update();
                }
                update(e) {
                  void 0 !== this.value &&
                    a[`uniform${this.typeFn}`](
                      e,
                      0 === this.typeFn.indexOf("Matrix")
                        ? this.transpose
                        : this.value,
                      0 === this.typeFn.indexOf("Matrix") ? this.value : null
                    );
                }
                getDeclaration(e, t, n) {
                  if (this.excludeFrom !== t) {
                    if ("array" === this.type)
                      return (
                        this.value[0].getDeclaration(e, t, this.value.length) +
                        `
const int ${e}_length = ${this.value.length};`
                      );
                    if ("struct" === this.type) {
                      let i = e.replace("u_", "");
                      return (
                        `uniform struct ${(i =
                          i.charAt(0).toUpperCase() + i.slice(1))}
                                {
` +
                        Object.entries(this.value)
                          .map(([e, n]) =>
                            n.getDeclaration(e, t).replace(/^uniform/, "")
                          )
                          .join("") +
                        `
} ${e}${n > 0 ? `[${n}]` : ""};`
                      );
                    }
                    return `uniform ${this.type} ${e}${n > 0 ? `[${n}]` : ""};`;
                  }
                }
              },
            },
            PlaneGeometry: {
              enumerable: !1,
              value: class {
                constructor(e, t, n, i, r) {
                  a.createBuffer(),
                    (this.attributes = {
                      position: new o.Attribute({
                        target: a.ARRAY_BUFFER,
                        size: 3,
                      }),
                      uv: new o.Attribute({ target: a.ARRAY_BUFFER, size: 2 }),
                      uvNorm: new o.Attribute({
                        target: a.ARRAY_BUFFER,
                        size: 2,
                      }),
                      index: new o.Attribute({
                        target: a.ELEMENT_ARRAY_BUFFER,
                        size: 3,
                        type: a.UNSIGNED_SHORT,
                      }),
                    }),
                    this.setTopology(n, i),
                    this.setSize(e, t, r);
                }
                setTopology(e = 1, t = 1) {
                  let n = this;
                  (n.xSegCount = e),
                    (n.ySegCount = t),
                    (n.vertexCount = (n.xSegCount + 1) * (n.ySegCount + 1)),
                    (n.quadCount = n.xSegCount * n.ySegCount * 2),
                    (n.attributes.uv.values = new Float32Array(
                      2 * n.vertexCount
                    )),
                    (n.attributes.uvNorm.values = new Float32Array(
                      2 * n.vertexCount
                    )),
                    (n.attributes.index.values = new Uint16Array(
                      3 * n.quadCount
                    ));
                  for (let i = 0; i <= n.ySegCount; i++)
                    for (let r = 0; r <= n.xSegCount; r++) {
                      let a = i * (n.xSegCount + 1) + r;
                      if (
                        ((n.attributes.uv.values[2 * a] = r / n.xSegCount),
                        (n.attributes.uv.values[2 * a + 1] =
                          1 - i / n.ySegCount),
                        (n.attributes.uvNorm.values[2 * a] =
                          (r / n.xSegCount) * 2 - 1),
                        (n.attributes.uvNorm.values[2 * a + 1] =
                          1 - (i / n.ySegCount) * 2),
                        r < n.xSegCount && i < n.ySegCount)
                      ) {
                        let s = i * n.xSegCount + r;
                        (n.attributes.index.values[6 * s] = a),
                          (n.attributes.index.values[6 * s + 1] =
                            a + 1 + n.xSegCount),
                          (n.attributes.index.values[6 * s + 2] = a + 1),
                          (n.attributes.index.values[6 * s + 3] = a + 1),
                          (n.attributes.index.values[6 * s + 4] =
                            a + 1 + n.xSegCount),
                          (n.attributes.index.values[6 * s + 5] =
                            a + 2 + n.xSegCount);
                      }
                    }
                  n.attributes.uv.update(),
                    n.attributes.uvNorm.update(),
                    n.attributes.index.update(),
                    o.debug("Geometry.setTopology", {
                      uv: n.attributes.uv,
                      uvNorm: n.attributes.uvNorm,
                      index: n.attributes.index,
                    });
                }
                setSize(e = 1, t = 1, n = "xz") {
                  let i = this;
                  (i.width = e),
                    (i.height = t),
                    (i.orientation = n),
                    (i.attributes.position.values &&
                      i.attributes.position.values.length ===
                        3 * i.vertexCount) ||
                      (i.attributes.position.values = new Float32Array(
                        3 * i.vertexCount
                      ));
                  let r = -(e / 2),
                    a = -(t / 2),
                    s = e / i.xSegCount,
                    l = t / i.ySegCount;
                  for (let c = 0; c <= i.ySegCount; c++) {
                    let d = a + c * l;
                    for (let h = 0; h <= i.xSegCount; h++) {
                      let u = r + h * s,
                        g = c * (i.xSegCount + 1) + h;
                      (i.attributes.position.values[
                        3 * g + "xyz".indexOf(n[0])
                      ] = u),
                        (i.attributes.position.values[
                          3 * g + "xyz".indexOf(n[1])
                        ] = -d);
                    }
                  }
                  i.attributes.position.update(),
                    o.debug("Geometry.setSize", {
                      position: i.attributes.position,
                    });
                }
              },
            },
            Mesh: {
              enumerable: !1,
              value: class {
                constructor(e, t) {
                  let n = this;
                  (n.geometry = e),
                    (n.material = t),
                    (n.wireframe = !1),
                    (n.attributeInstances = []),
                    Object.entries(n.geometry.attributes).forEach(([e, t]) => {
                      n.attributeInstances.push({
                        attribute: t,
                        location: t.attach(e, n.material.program),
                      });
                    }),
                    o.meshes.push(n),
                    o.debug("Mesh.constructor", { mesh: n });
                }
                draw() {
                  a.useProgram(this.material.program),
                    this.material.uniformInstances.forEach(
                      ({ uniform: e, location: t }) => e.update(t)
                    ),
                    this.attributeInstances.forEach(
                      ({ attribute: e, location: t }) => e.use(t)
                    ),
                    a.drawElements(
                      this.wireframe ? a.LINES : a.TRIANGLES,
                      this.geometry.attributes.index.values.length,
                      a.UNSIGNED_SHORT,
                      0
                    );
                }
                remove() {
                  o.meshes = o.meshes.filter((e) => e != this);
                }
              },
            },
            Attribute: {
              enumerable: !1,
              value: class {
                constructor(e) {
                  (this.type = a.FLOAT),
                    (this.normalized = !1),
                    (this.buffer = a.createBuffer()),
                    Object.assign(this, e),
                    this.update();
                }
                update() {
                  void 0 !== this.values &&
                    (a.bindBuffer(this.target, this.buffer),
                    a.bufferData(this.target, this.values, a.STATIC_DRAW));
                }
                attach(e, t) {
                  let n = a.getAttribLocation(t, e);
                  return (
                    this.target === a.ARRAY_BUFFER &&
                      (a.enableVertexAttribArray(n),
                      a.vertexAttribPointer(
                        n,
                        this.size,
                        this.type,
                        this.normalized,
                        0,
                        0
                      )),
                    n
                  );
                }
                use(e) {
                  a.bindBuffer(this.target, this.buffer),
                    this.target === a.ARRAY_BUFFER &&
                      (a.enableVertexAttribArray(e),
                      a.vertexAttribPointer(
                        e,
                        this.size,
                        this.type,
                        this.normalized,
                        0,
                        0
                      ));
                }
              },
            },
          });
        let s = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        o.commonUniforms = {
          projectionMatrix: new o.Uniform({ type: "mat4", value: s }),
          modelViewMatrix: new o.Uniform({ type: "mat4", value: s }),
          resolution: new o.Uniform({ type: "vec2", value: [1, 1] }),
          aspectRatio: new o.Uniform({ type: "float", value: 1 }),
        };
      }
      setSize(e = 640, t = 480) {
        (this.width = e),
          (this.height = t),
          (this.canvas.width = e),
          (this.canvas.height = t),
          this.gl.viewport(0, 0, e, t),
          (this.commonUniforms.resolution.value = [e, t]),
          (this.commonUniforms.aspectRatio.value = e / t),
          this.debug("MiniGL.setSize", { width: e, height: t });
      }
      setOrthographicCamera(e = 0, t = 0, n = 0, i = -2e3, o = 2e3) {
        (this.commonUniforms.projectionMatrix.value = [
          2 / this.width,
          0,
          0,
          0,
          0,
          2 / this.height,
          0,
          0,
          0,
          0,
          2 / (i - o),
          0,
          e,
          t,
          n,
          1,
        ]),
          this.debug(
            "setOrthographicCamera",
            this.commonUniforms.projectionMatrix.value
          );
      }
      render() {
        this.gl.clearColor(0, 0, 0, 0),
          this.gl.clearDepth(1),
          this.meshes.forEach((e) => e.draw());
      }
    }
    function i(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    class o {
      constructor(...e) {
        i(this, "el", void 0),
          i(this, "cssVarRetries", 0),
          i(this, "maxCssVarRetries", 200),
          i(this, "angle", 0),
          i(this, "isLoadedClass", !1),
          i(this, "isScrolling", !1),
          i(this, "scrollingTimeout", void 0),
          i(this, "scrollingRefreshDelay", 200),
          i(this, "isIntersecting", !1),
          i(this, "shaderFiles", void 0),
          i(this, "vertexShader", void 0),
          i(this, "sectionColors", void 0),
          i(this, "computedCanvasStyle", void 0),
          i(this, "conf", void 0),
          i(this, "uniforms", void 0),
          i(this, "t", 1253106),
          i(this, "last", 0),
          i(this, "width", void 0),
          i(this, "minWidth", 1111),
          i(this, "height", 600),
          i(this, "xSegCount", void 0),
          i(this, "ySegCount", void 0),
          i(this, "mesh", void 0),
          i(this, "material", void 0),
          i(this, "geometry", void 0),
          i(this, "minigl", void 0),
          i(this, "scrollObserver", void 0),
          i(this, "amp", 320),
          i(this, "seed", 5),
          i(this, "freqX", 14e-5),
          i(this, "freqY", 29e-5),
          i(this, "freqDelta", 1e-5),
          i(this, "activeColors", [1, 1, 1, 1]),
          i(this, "isMetaKey", !1),
          i(this, "isGradientLegendVisible", !1),
          i(this, "isMouseDown", !1),
          i(this, "handleScroll", () => {
            clearTimeout(this.scrollingTimeout),
              (this.scrollingTimeout = setTimeout(
                this.handleScrollEnd,
                this.scrollingRefreshDelay
              )),
              this.isGradientLegendVisible && this.hideGradientLegend(),
              this.conf.playing && ((this.isScrolling = !0), this.pause());
          }),
          i(this, "handleScrollEnd", () => {
            (this.isScrolling = !1), this.isIntersecting && this.play();
          }),
          i(this, "resize", () => {
            (this.width = window.innerWidth),
              this.minigl.setSize(this.width, this.height),
              this.minigl.setOrthographicCamera(),
              (this.xSegCount = Math.ceil(this.width * this.conf.density[0])),
              (this.ySegCount = Math.ceil(this.height * this.conf.density[1])),
              this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount),
              this.mesh.geometry.setSize(this.width, this.height),
              (this.mesh.material.uniforms.u_shadow_power.value =
                this.width < 600 ? 5 : 6);
          }),
          i(this, "handleMouseDown", (e) => {
            this.isGradientLegendVisible &&
              ((this.isMetaKey = e.metaKey),
              (this.isMouseDown = !0),
              !1 === this.conf.playing && requestAnimationFrame(this.animate));
          }),
          i(this, "handleMouseUp", () => {
            this.isMouseDown = !1;
          }),
          i(this, "animate", (e) => {
            if (!this.shouldSkipFrame(e) || this.isMouseDown) {
              if (
                ((this.t += Math.min(e - this.last, 1e3 / 15)),
                (this.last = e),
                this.isMouseDown)
              ) {
                let t = 160;
                this.isMetaKey && (t = -160), (this.t += t);
              }
              (this.mesh.material.uniforms.u_time.value = this.t),
                this.minigl.render();
            }
            if (0 !== this.last && this.isStatic)
              return this.minigl.render(), void this.disconnect();
            (this.conf.playing || this.isMouseDown) &&
              requestAnimationFrame(this.animate);
          }),
          i(this, "addIsLoadedClass", () => {
            this.isLoadedClass ||
              ((this.isLoadedClass = !0),
              this.el.classList.add("isLoaded"),
              setTimeout(() => {
                this.el.parentElement.classList.add("isLoaded");
              }, 3e3));
          }),
          i(this, "pause", () => {
            this.conf.playing = !1;
          }),
          i(this, "play", () => {
            requestAnimationFrame(this.animate), (this.conf.playing = !0);
          }),
          i(
            this,
            "initGradient",
            (e) => ((this.el = document.querySelector(e)), this.connect(), this)
          );
      }
      async connect() {
        (this.shaderFiles = {
          vertex:
            "varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 2.0 + 0.5\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}",
          noise:
            "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}",
          blend:
            "//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n	return blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n	return 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n	return base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n	return blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n	return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n	return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n	return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n	return max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n	// Note : Same implementation as BlendSubtractf\n	return max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n	// Note : Same implementation as BlendSubtract\n	return max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n	// Note : Same implementation as BlendAddf\n	return min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n	// Note : Same implementation as BlendAdd\n	return min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}",
          fragment:
            "varying vec3 v_color;\n\nvoid main() {\n  vec3 color = v_color;\n  if (u_darken_top == 1.0) {\n    vec2 st = gl_FragCoord.xy/resolution.xy;\n    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n  }\n  gl_FragColor = vec4(color, 1.0);\n}",
        }),
          (this.conf = {
            presetName: "",
            wireframe: !1,
            density: [0.06, 0.16],
            zoom: 1,
            rotation: 0,
            playing: !0,
          }),
          document.querySelectorAll("canvas").length < 1
            ? console.log("DID NOT LOAD HERO STRIPE CANVAS")
            : ((this.minigl = new n(this.el, null, null, !0)),
              requestAnimationFrame(() => {
                this.el &&
                  ((this.computedCanvasStyle = getComputedStyle(this.el)),
                  this.waitForCssVars());
              }));
      }
      disconnect() {
        this.scrollObserver &&
          (window.removeEventListener("scroll", this.handleScroll),
          window.removeEventListener("mousedown", this.handleMouseDown),
          window.removeEventListener("mouseup", this.handleMouseUp),
          window.removeEventListener("keydown", this.handleKeyDown),
          this.scrollObserver.disconnect()),
          window.removeEventListener("resize", this.resize);
      }
      initMaterial() {
        this.uniforms = {
          u_time: new this.minigl.Uniform({ value: 0 }),
          u_shadow_power: new this.minigl.Uniform({ value: 5 }),
          u_darken_top: new this.minigl.Uniform({
            value: "" === this.el.dataset.jsDarkenTop ? 1 : 0,
          }),
          u_active_colors: new this.minigl.Uniform({
            value: this.activeColors,
            type: "vec4",
          }),
          u_global: new this.minigl.Uniform({
            value: {
              noiseFreq: new this.minigl.Uniform({
                value: [this.freqX, this.freqY],
                type: "vec2",
              }),
              noiseSpeed: new this.minigl.Uniform({ value: 5e-6 }),
            },
            type: "struct",
          }),
          u_vertDeform: new this.minigl.Uniform({
            value: {
              incline: new this.minigl.Uniform({
                value: Math.sin(this.angle) / Math.cos(this.angle),
              }),
              offsetTop: new this.minigl.Uniform({ value: -0.5 }),
              offsetBottom: new this.minigl.Uniform({ value: -0.5 }),
              noiseFreq: new this.minigl.Uniform({
                value: [3, 4],
                type: "vec2",
              }),
              noiseAmp: new this.minigl.Uniform({ value: this.amp }),
              noiseSpeed: new this.minigl.Uniform({ value: 10 }),
              noiseFlow: new this.minigl.Uniform({ value: 3 }),
              noiseSeed: new this.minigl.Uniform({ value: this.seed }),
            },
            type: "struct",
            excludeFrom: "fragment",
          }),
          u_baseColor: new this.minigl.Uniform({
            value: this.sectionColors[0],
            type: "vec3",
            excludeFrom: "fragment",
          }),
          u_waveLayers: new this.minigl.Uniform({
            value: [],
            excludeFrom: "fragment",
            type: "array",
          }),
        };
        for (let e = 1; e < this.sectionColors.length; e += 1)
          this.uniforms.u_waveLayers.value.push(
            new this.minigl.Uniform({
              value: {
                color: new this.minigl.Uniform({
                  value: this.sectionColors[e],
                  type: "vec3",
                }),
                noiseFreq: new this.minigl.Uniform({
                  value: [
                    2 + e / this.sectionColors.length,
                    3 + e / this.sectionColors.length,
                  ],
                  type: "vec2",
                }),
                noiseSpeed: new this.minigl.Uniform({ value: 11 + 0.3 * e }),
                noiseFlow: new this.minigl.Uniform({ value: 6.5 + 0.3 * e }),
                noiseSeed: new this.minigl.Uniform({
                  value: this.seed + 10 * e,
                }),
                noiseFloor: new this.minigl.Uniform({ value: 0.1 }),
                noiseCeil: new this.minigl.Uniform({ value: 0.63 + 0.07 * e }),
              },
              type: "struct",
            })
          );
        return (
          (this.vertexShader = [
            this.shaderFiles.noise,
            this.shaderFiles.blend,
            this.shaderFiles.vertex,
          ].join("\n\n")),
          new this.minigl.Material(
            this.vertexShader,
            this.shaderFiles.fragment,
            this.uniforms
          )
        );
      }
      initMesh() {
        (this.material = this.initMaterial()),
          (this.geometry = new this.minigl.PlaneGeometry()),
          (this.mesh = new this.minigl.Mesh(this.geometry, this.material));
      }
      shouldSkipFrame(e) {
        return (
          !!window.document.hidden ||
          !this.conf.playing ||
          parseInt(e, 10) % 2 == 0 ||
          void 0
        );
      }
      updateFrequency(e) {
        (this.freqX += e), (this.freqY += e);
      }
      toggleColor(e) {
        this.activeColors[e] = 0 === this.activeColors[e] ? 1 : 0;
      }
      showGradientLegend() {
        this.width > this.minWidth &&
          ((this.isGradientLegendVisible = !0),
          document.body.classList.add("isGradientLegendVisible"));
      }
      hideGradientLegend() {
        (this.isGradientLegendVisible = !1),
          document.body.classList.remove("isGradientLegendVisible");
      }
      init() {
        this.initGradientColors(),
          this.initMesh(),
          this.resize(),
          requestAnimationFrame(this.animate),
          window.addEventListener("resize", this.resize);
      }
      waitForCssVars() {
        if (
          this.computedCanvasStyle &&
          -1 !==
            this.computedCanvasStyle
              .getPropertyValue("--gradient-color-1")
              .indexOf("#")
        )
          this.init(), this.addIsLoadedClass();
        else {
          if (
            ((this.cssVarRetries += 1),
            this.cssVarRetries > this.maxCssVarRetries)
          )
            return (
              (this.sectionColors = [16711680, 16711680, 16711935, 65280, 255]),
              void this.init()
            );
          requestAnimationFrame(() => this.waitForCssVars());
        }
      }
      initGradientColors() {
        this.sectionColors = [
          "--gradient-color-1",
          "--gradient-color-2",
          "--gradient-color-3",
          "--gradient-color-4",
        ]
          .map((e) => {
            let t = this.computedCanvasStyle.getPropertyValue(e).trim();
            if (4 === t.length) {
              let n = t
                .substr(1)
                .split("")
                .map((e) => e + e)
                .join("");
              t = `#${n}`;
            }
            return t && `0x${t.substr(1)}`;
          })
          .filter(Boolean)
          .map(t);
      }
    }
    new o().initGradient("#gradient-canvas");
  },
  homeHeroMask = () => {
    let e = gsap.utils.toArray(".heading_title.mask #letters");
    e.forEach((e) => {
      e.classList.add("animation-assigned"),
        (e.style.visibility = "visible"),
        gsap.to(e.querySelectorAll(".single_letter"), {
          duration: 0.8,
          y: "-100%",
          ease: Power4.easeOut,
          stagger: e.dataset.stagger,
          delay: 3.5,
          scrollTrigger: {
            trigger: e,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
    });
  },
  homeHeroAnimation = () => {
    let e = $(".hero_heading--container");
    $(e).length > 0 &&
      gsap.to(e, {
        scale: 70,
        force3D: !1,
        x: "87%",
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: ".home_hero--wrapper",
          start: "top top",
          end: "+=80%",
          scrub: 0.3,
          pin: !0,
          id: "letters",
        },
        onComplete() {
          ScrollTrigger.refresh(!0);
        },
      });
    let t = $(".hero_text--container");
    $(t).length > 0 &&
      gsap.to(t, {
        y: 20,
        x: 20,
        opacity: 0,
        scrollTrigger: {
          trigger: "#wrapper",
          start: "top top",
          end: 40,
          scrub: !0,
          id: "subtitle",
        },
      });
    let n = $(".circular_text--container");
    $(n).length > 0 &&
      gsap.to(n, {
        y: 20,
        x: -20,
        opacity: 0,
        scrollTrigger: {
          trigger: "#wrapper",
          start: "top top",
          end: 40,
          scrub: !0,
          id: "circular text",
        },
      });
  },
  singleProjectAnimation = () => {
    if (window.innerWidth > 900) {
      var e = document.querySelectorAll(
        ".home_portfolio--wrapper .single_project"
      );
      e.length > 0 &&
        e.forEach(function (e) {
          var t = $(e),
            n = $(e).prev(),
            i = gsap.timeline({
              scrollTrigger: {
                trigger: t,
                force3D: !0,
                start: "top 75%",
                end: "top top",
                scrub: !0,
                id: "conceal",
              },
            });
          i.fromTo(n, { scale: 1, opacity: 1 }, { scale: 0.8, opacity: 0 }),
            i.fromTo(
              t,
              { boxShadow: "0rem 0rem 0rem 0rem rgba(0,0,0,0)" },
              { boxShadow: "0rem -4rem 10rem 0rem rgba(0,0,0,0.25)" }
            );
        });
    }
  },
  scrollablePortfolioBar = () => {
    var e = document.querySelector(".portfolio_scrollable--container");
    if (e) {
      var t,
        n = document.querySelector(".home_portfolio--wrapper"),
        i = document.querySelector(".progress.bar");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: n,
            start: "top center",
            end: "bottom center",
            scrub: !0,
            pin: e,
            id: "scrollable",
          },
        })
        .fromTo(i, { scaleX: 0 }, { scaleX: 1 });
    }
  },
  launchFancybox = () => {
    var e;
    document.querySelectorAll("[data-fancybox]").length > 0 &&
      Fancybox.bind("[data-fancybox]", {
        contentClick: "close",
        wheel: !1,
        Images: { initialSize: "fit" },
        Html: {
          videoRatio: !1,
          videoTpl:
            '<video class="fancybox__html5video" playsinline loop controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" /></video>',
        },
        Toolbar: { display: { left: [], middle: [], right: ["close"] } },
        Thumbs: !1,
      });
  },
  playgroundReveal = () => {
    let e = gsap.utils.toArray(".grid_playground > .single");
    e.forEach((e) => {
      gsap.to(e.querySelectorAll(".mask"), {
        y: "-100%",
        duration: 0.8,
        ease: Power4.easeOut,
        delay: e.dataset.delay,
        scrollTrigger: {
          trigger: e,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  },
  revealEffectAnimation = () => {
    let e = gsap.utils.toArray(".reveal_effect");
    e.forEach((e) => {
      gsap.to(e.querySelectorAll(".mask"), {
        y: "-100%",
        duration: 0.8,
        ease: Power4.easeOut,
        delay: e.dataset.delay,
        scrollTrigger: {
          trigger: e,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  },
  loadingAnimationScript = () => {
    var e = document.getElementById("loading_animation");
    if (e) {
      var t = bodymovin.loadAnimation({
        container: e,
        path: "/json/loading_animation.json",
        renderer: "svg",
        loop: !0,
        autoplay: !0,
        name: "Loading Animation",
      });
      setTimeout(function () {
        var e = document.querySelectorAll(".loader_wrapper");
        e &&
          e.forEach(function (e) {
            e.classList.add("loaded");
          }),
          (document.documentElement.style.overflowY = "initial");
      }, 3e3);
    }
  },
  autoplayVideo = () => {
    let e = document.querySelectorAll("video");
    e.forEach((e) => {
      e.play();
    });
  },
  setActiveLink = () => {
    let e = document.querySelector(".main_menu--container"),
      t = e.querySelectorAll(".link");
    t.forEach((e) => {
      e.classList.toggle("is-active", e.href === window.location.href);
    });
  },
  setActiveLinkMobile = () => {
    let e = document.querySelector(".mobile_menu"),
      t = e.querySelectorAll("li > a");
    t.forEach((e) => {
      e.classList.toggle("current-page", e.href === window.location.href);
    });
  },
  masterInit = () => {
    gsap.registerPlugin(ScrollTrigger),
      initSmoothScrolling(),
      mobileScreenHeight(),
      mobileCheck(),
      closeMobileMenu(),
      magneticMenuItems(),
      stickyHeader(),
      videoSrcScript(),
      checkWebpSupport(),
      loadingAnimationScript(),
      homeHeroGradient(),
      homeHeroMask(),
      homeHeroAnimation(),
      singleProjectAnimation(),
      scrollablePortfolioBar(),
      globalAnimation(),
      ctaReveal(),
      autoplayVideo(),
      playgroundReveal(),
      revealEffectAnimation(),
      cursorFollower(),
      setActiveLink(),
      setActiveLinkMobile(),
      launchFancybox();
  };
jQuery(document).ready(function () {
  masterInit(), lottieLogo(), mobileMenuToggle();
}),
  gtag("config", "G-SXH584WB3E", { send_page_view: !1 }),
  barba.use(barbaCss),
  barba.init({
    sync: !0,
    debug: !1,
    preventRunning: !0,
    timeout: 7e3,
    requestError: (e, t, n, i) => (
      "click" === t && i.status && 404 === i.status && barba.go("/404"), !1
    ),
    transitions: [
      {
        name: "fade",
        leave() {},
        enter() {},
        beforeOnce() {},
        beforeEnter() {
          history.scrollRestoration && (history.scrollRestoration = "manual"),
            window.scrollTo(0, 0);
        },
        afterEnter() {
          masterInit();
        },
        after() {
          gtag("event", "page_view", {
            page_title: document.title,
            page_location: location.href,
            page_path: location.pathname,
          });
        },
      },
    ],
  });


   const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current === null) return;
    const charSplit = new SplitType(ref.current, {
      types: "chars",
      wordClass: "word-title",
    });
    gsap.from(charSplit.chars, {
      duration: 0.8,
      opacity: 0,
      y: 49,
      ease: "power4.easeOut",
      stagger: 0.03,
      delay: 0.5,
    });
  }, []);