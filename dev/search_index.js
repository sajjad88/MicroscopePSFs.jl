var documenterSearchIndex = {"docs":
[{"location":"Interpolation/#Interpolated-PSFs","page":"Interpolation","title":"Interpolated PSFs","text":"","category":"section"},{"location":"Interpolation/#Overview","page":"Interpolation","title":"Overview","text":"","category":"section"},{"location":"Interpolation/","page":"Interpolation","title":"Interpolation","text":"Interpolated PSFs can be usefull when the same PSF is needed to generate models with various different source locations.  Interpolated PSFs use the Interpolations.jl package. While the Airy and Gauss PSFs can be interpolated, speed benifits primarily come from avoiding the integral over the pupil function in the pupil function based PSFs  such as Scaler3D.  Due to sub-sampling, 3D PSFs can be slow to generate.    ","category":"page"},{"location":"Interpolation/","page":"Interpolation","title":"Interpolation","text":"MicroscopePSFs.InterpolatedPSF","category":"page"},{"location":"Interpolation/#Examples","page":"Interpolation","title":"Examples","text":"","category":"section"},{"location":"Interpolation/","page":"Interpolation","title":"Interpolation","text":"using MicroscopePSFs\nPSF=MicroscopePSFs\n\nna=1.2\nn=1.3\nλ=.6 \npixelsize=.1\nsz=16 \n\n# Create the PSF \np=PSF.Scalar3D(na,λ,n,pixelsize)\n\n#Build Interpolation\nmaxrange=(sz*2,sz*2,1)\nip=PSF.InterpolatedPSF(p,maxrange)\n\nim=PSF.pdf(ip,roi,(sz/2,sz/2,0))","category":"page"},{"location":"Library/#Library","page":"Library","title":"Library","text":"","category":"section"},{"location":"Library/","page":"Library","title":"Library","text":"","category":"page"},{"location":"Library/","page":"Library","title":"Library","text":"Modules = [MicroscopePSFs]","category":"page"},{"location":"Library/#MicroscopePSFs.Airy2D","page":"Library","title":"MicroscopePSFs.Airy2D","text":"Airy PSF\n\n2D Airy Patter psf using paraxial, scalar model\n\nFields\n\nna              : Numerical Aperture           \nλ               : Emission Wavelength           \npixelsize       : Linear size of a back-projected pixel\n\nThe Airy PSF is   I(r)=ν²/(4π)(2J₁(νr)/(νr))²     where      ν=πD/(λf)=2π*nₐ/λ  \n\n\n\n\n\n","category":"type"},{"location":"Library/#MicroscopePSFs.Dipole3D","page":"Library","title":"MicroscopePSFs.Dipole3D","text":"Dipole3D\n\n3D psf using vector model and OTF rescaling \n\nFields\n\npupilfunction   : Pupil Function structure           \n'Σ'               : OTF rescaling via image space 2D Gaussian Covariance matrix \n'ksize'           : number of pixels in pupil \n'dipole_ang'         : orientation of dipole moment (polar, azimuthal) \n\n\n\n\n\n","category":"type"},{"location":"Library/#MicroscopePSFs.Dipole3D-Tuple{Any, Any, Vector, Any, Vector}","page":"Library","title":"MicroscopePSFs.Dipole3D","text":"Dipole3D()\n- 'n'       : refractive indices (sample medium, cover glass, immersion medium)\n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.Gauss2D","page":"Library","title":"MicroscopePSFs.Gauss2D","text":"Gauss2D\n\nIsotropic 2D Gaussian psf\n\nFields\n\nσ            : Gaussian σ           \npixelsize    : Linear size of a pixel\n\n\n\n\n\n","category":"type"},{"location":"Library/#MicroscopePSFs.Gauss2D-Tuple{MicroscopePSFs.Airy2D}","page":"Library","title":"MicroscopePSFs.Gauss2D","text":"Gauss2D(p::Airy2D)\n\nconvert an Airy2D to Gaussian PSF    \n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.ImmPSF","page":"Library","title":"MicroscopePSFs.ImmPSF","text":"ImmPSF\n\n3D psf with index mismatch aberration using scalar or vector model and OTF rescaling \n\nFields\n\npupilfunction   : Pupil Function structure           \n'Σ'               : OTF rescaling via image space 2D Gaussian Covariance matrix \n'ksize'           : number of pixels in pupil \n\n\n\n\n\n","category":"type"},{"location":"Library/#MicroscopePSFs.PSF","page":"Library","title":"MicroscopePSFs.PSF","text":"PSF defines an abstract type\n\n\n\n\n\n","category":"type"},{"location":"Library/#MicroscopePSFs.PupilFunction","page":"Library","title":"MicroscopePSFs.PupilFunction","text":"PupilFunction\n\nA structure used by 3D PSF methods.\n\nFields\n\nnₐ              : Numerical Aperture           \nλ               : Emission Wavelength           \nn               : Immersion Index           \npixelsize       : Linear size of a back-projected pixel\n'kpixelsize'      : Number of pixels used in pupil function image\n'pupil'           : Pupil function ksizeksize2  \n\nCalculations of various 3D PSF types will involve calculations based around  Pupil Funciton.  They differ in the complexity and approach used to calculate  Pupil Function. \n\n\n\n\n\n","category":"type"},{"location":"Library/#MicroscopePSFs.Scalar3D","page":"Library","title":"MicroscopePSFs.Scalar3D","text":"Scalar3D\n\n3D psf using scalar model and OTF rescaling \n\nFields\n\npupilfunction   : Pupil Function structure           \npixelsize            : Linear size of a back-projected pixel\n'Σ'               : OTF rescaling via image space 2D Gaussian Covariance matrix \n'ksize'           : number of pixels in pupil \n\n\n\n\n\n","category":"type"},{"location":"Library/#MicroscopePSFs.SplinePSF","page":"Library","title":"MicroscopePSFs.SplinePSF","text":"SplinePSF(psfstack)\n\n3D psf interpolated from a 3D PSF stack (spline interpolation)\n\nFields\n\npsfstack             : a 3D PSF stack        \nsitp                 : spline interpolation object\npixelsize            : Linear size of a back-projected pixel\npixelsize_z          : step size in z, unit: micron\n\n\n\n\n\n","category":"type"},{"location":"Library/#MicroscopePSFs.importpsf-Tuple{Any, Any}","page":"Library","title":"MicroscopePSFs.importpsf","text":"importpsf(filename, psftype)\n\nimport PSF data from PSF learning software\n\nArguments\n\nfilename   : file name of the PSF data\npsftype    : PSF types that are supported by julia package, options are: \"scalar3D\", \"immPSF\", \"splinePSF\"\nsource     : software that generates the PSF data, default is \"python\"\nzstage     : position of the sample stage, equal to zero at the coverslip, positive when imaging inside the sample\nmvtype     : for immPSF only, options are: \"bead\", \"stage\" \n\nreturns\n\np           : PSF Type\nPSFstack    : a 3D stack of learned PSF\nh           : PupilFunction Type\nz           : ZernikeCoefficients Type\n\nExample:\n\np, PSFstack, z, h = importpsf(filename,psftype)\n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.load-Tuple{String}","page":"Library","title":"MicroscopePSFs.load","text":"load(psffile)\n\nload PSF file\n\nArguments\n\npsffile : The full path to the psf file\n\nreturn the MicroscopePSFs type from the file\n\nExample:\n\np=load('psffile.jld2')\n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.makeobs-Tuple{Any}","page":"Library","title":"MicroscopePSFs.makeobs","text":"makeobs(r)\n\nmake a set of observations points in a square window\n\nArguments\n\nr   : A range  \n\nreturns a vector of Tuples e.g. (x,y)   \n\nExample:\n\nobs=makeobs(-8:8)\n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.nl2noll-Tuple{Int64, Int64}","page":"Library","title":"MicroscopePSFs.nl2noll","text":"nl2noll(n::Int,l::Int)\n\nconvert the n and l indexes into a Noll linear index\n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.nl2osa-Tuple{Int64, Int64}","page":"Library","title":"MicroscopePSFs.nl2osa","text":"nl2osa(n::Int,l::Int)\n\nconvert the n and l indexes into a OSE linear index\n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.noll2nl-Tuple{Int64}","page":"Library","title":"MicroscopePSFs.noll2nl","text":"noll2nl(j::Int)\n\nconvert the Noll index j into n and l \n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.noll2osa-Tuple{Int64}","page":"Library","title":"MicroscopePSFs.noll2osa","text":"noll2osa(j::Int)\n\nconvert the Noll index j to OSA index j \n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.normalize!-Tuple{MicroscopePSFs.PupilFunction}","page":"Library","title":"MicroscopePSFs.normalize!","text":"normalize!(p::PupilFunction)\n\nnormalize pupil using Parseval's theorem\n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.osa2nl-Tuple{Int64}","page":"Library","title":"MicroscopePSFs.osa2nl","text":"osa2nl(j::Int)\n\nconvert the OSA index j into n and l \n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.osa2noll-Tuple{Int64}","page":"Library","title":"MicroscopePSFs.osa2noll","text":"osa2noll(j::Int)\n\nconvert the OSA index j to Noll index j \n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.pdf-Tuple{MicroscopePSFs.PSF, Array, Tuple}","page":"Library","title":"MicroscopePSFs.pdf","text":"pdf(p::PSF,roi::Array,x_emitter::Tuple)\n\nreturn the psf at pixel locations defined by roi with emitter located at x_emitter. \n\nArguments\n\np::PSF              : psf structure\nroi::Array          : array of tuples that define the pixel locations \nx_emitter::Tuple    : location of emitter \n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.pdf-Tuple{MicroscopePSFs.PSF, Tuple, Tuple}","page":"Library","title":"MicroscopePSFs.pdf","text":"pdf(p::PSF,x_pixel::Tuple,x_emitter::Tuple)\n\nabstract function: return the psf at pixel x_pixel with emitter located at x_emitter. \n\nArguments\n\np::PSF              : psf structure\nx_pixel::Tuple      : location of pixel \nx_emitter::Tuple    : location of emitter \n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.pdfₐ-Tuple{MicroscopePSFs.PSF, Tuple, Tuple}","page":"Library","title":"MicroscopePSFs.pdfₐ","text":"pdfₐ(p::PSF,x_pixel::Tuple,x_emitter::Tuple)\n\nabstract function: return the complex amplitude at pixel x_pixel with emitter located at x_emitter. \n\nArguments\n\np::PSF              : psf structure\nx_pixel::Tuple      : location of pixel \nx_emitter::Tuple    : location of emitter \n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.radialpolynomial-Tuple{Int64, Int64, Any}","page":"Library","title":"MicroscopePSFs.radialpolynomial","text":"radialpolynomical(n::Int,m::Int,ρ)\n\nreturn the value of the n,m radial polynomial at ρ\n\nvalues of ρ>1 will return zero\n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.save-Tuple{String, MicroscopePSFs.PSF}","page":"Library","title":"MicroscopePSFs.save","text":"save(psffile,p)\n\nsave PSF type as .jld2 file\n\nArguments\n\npsffile : The full saving path\np       : MicroscopePSFs type\n\nExample:\n\nsave('psffile.jld2',p)\n\n\n\n\n\n","category":"method"},{"location":"Library/#MicroscopePSFs.zernikepolynomial-Tuple{Int64, Int64, Any, Any}","page":"Library","title":"MicroscopePSFs.zernikepolynomial","text":"zernike(n::Int,l::Int,ρ,ϕ)\n\nreturn the value the n,l zernike polynomial at ρ,ϕ\n\nNote that l is in -n<:2:n\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = MicroscopePSFs","category":"page"},{"location":"#MicroscopePSFs","page":"Home","title":"MicroscopePSFs","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for MicroscopePSFs.","category":"page"},{"location":"Aberrations/#Aberrations","page":"Aberrations","title":"Aberrations","text":"","category":"section"},{"location":"Aberrations/","page":"Aberrations","title":"Aberrations","text":"MicroscopePSFs includes a class of PSFs that are generated via integration over a complex pupil function, P(k_xk_y). Aberrations can be included in this calculation by modification of the pupil function.  This can be done by direct modification of the pupil or by expansion into Zernike modes.  ","category":"page"},{"location":"Aberrations/#The-Pupil-Function","page":"Aberrations","title":"The Pupil Function","text":"","category":"section"},{"location":"Aberrations/#Zernike-Expansion","page":"Aberrations","title":"Zernike Expansion","text":"","category":"section"},{"location":"Aberrations/","page":"Aberrations","title":"Aberrations","text":"Pupil function based PSFs can be created with a pupil magnitude and phase that are each given by a sum of Zernike polynomials.  These are specified by a MicroscopePSFs.ZernikeCoefficients structure that is passed to the consructor:","category":"page"},{"location":"Aberrations/","page":"Aberrations","title":"Aberrations","text":"MicroscopePSFs.ZernikeCoefficients","category":"page"},{"location":"Aberrations/#MicroscopePSFs.ZernikeCoefficients","page":"Aberrations","title":"MicroscopePSFs.ZernikeCoefficients","text":"ZernikeCoefficients\n\n\n\n\n\n","category":"type"},{"location":"Aberrations/","page":"Aberrations","title":"Aberrations","text":"The fields of this structure hold the coefficients of Zernike expansion using the OSA/ANSI linear index.  These vectors are one based where e.g. mag[1] holds the coefficient for the j = 0 linear index.  ","category":"page"},{"location":"Aberrations/","page":"Aberrations","title":"Aberrations","text":"Zernike polynomials are normalized such that coefficients are equal to the root-mean-square error across the unit disk.  This normalization is:","category":"page"},{"location":"Aberrations/","page":"Aberrations","title":"Aberrations","text":"int_0^2piint_0^1 Z^2  rho drho dphi = pi","category":"page"},{"location":"Aberrations/#Example","page":"Aberrations","title":"Example","text":"","category":"section"},{"location":"Aberrations/","page":"Aberrations","title":"Aberrations","text":"A Tetrapod type PSF using a mixture of 1st and 2nd order astigmatism. ","category":"page"},{"location":"Aberrations/","page":"Aberrations","title":"Aberrations","text":"using Pkg\nPkg.add(\"Plots\")","category":"page"},{"location":"Aberrations/","page":"Aberrations","title":"Aberrations","text":"using Plots\nusing MicroscopePSFs\n\nmag=[1.0]\nphase=zeros(14)\nphase[6]=.5 #osa index 5\nphase[14]=-.5 #osa index 13\nz=MicroscopePSFs.ZernikeCoefficients(mag,phase)\n\nna=1.2\nn=1.3\nλ=.6 \npixelsize=.1\n\np=MicroscopePSFs.Scalar3D(na,λ,n,pixelsize;z=z)\n\nsz=32  # hide\nroi=[(x,y,0) for y=-sz/2:(sz/2-1), x=-sz/2:(sz/2-1)]  # hide\n\nzrange=cat(dims=1,collect(LinRange(-1,1,9)),collect(LinRange(1,-1,9)))  # hide\nanim = @animate for z ∈ zrange  # hide\n   heatmap(MicroscopePSFs.pdf(p,roi,(0.0,0.0,z)), aspectratio=:equal, yflip = true, colorbar=:none)  # hide\nend  # hide\ngif(anim, \"tetrapod.gif\",fps = 5) # hide","category":"page"}]
}
